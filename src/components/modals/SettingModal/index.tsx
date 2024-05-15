import Loading from '@/components/Loading';
import { QuerySelectors, QuerySelectorsKey } from '@/types/storage';
import { querySelectorDesciptions } from '@/utils/linkedin/dom';
import {
  getCustomQuerySelectors,
  setCustomQuerySelectors,
  resetCustomQuerySelectors,
} from '@/utils/storage';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

type CustomQuerySelectorListItem = {
  key: QuerySelectorsKey;
  selector: string;
  desc: string;
};

const SettingModal = ({ onClose }: { onClose: VoidFunction }) => {
  const [querySelectors, setQuerySelectors] = useState<QuerySelectors>();
  const querySelectorList = useMemo<CustomQuerySelectorListItem[]>(() => {
    if (!querySelectors) return [];

    const querySelectorKeys = Object.keys(
      querySelectors
    ) as QuerySelectorsKey[];
    const list: CustomQuerySelectorListItem[] = [];

    for (const k of querySelectorKeys) {
      list.push({
        key: k,
        selector: querySelectors[k],
        desc: querySelectorDesciptions[k],
      });
    }

    list.sort((a, b) => a.key.localeCompare(b.key));

    return list;
  }, [querySelectors]);

  const handleSelectorChange =
    (k: QuerySelectorsKey) => (e: ChangeEvent<HTMLInputElement>) => {
      setQuerySelectors((prevQuerySelectors) =>
        !prevQuerySelectors
          ? prevQuerySelectors
          : {
              ...prevQuerySelectors,
              [k]: e.target.value,
            }
      );
    };

  const resetQuerySelectors = async () => {
    if (confirm('You want to reset parsing elements?')) {
      await resetCustomQuerySelectors();
      await loadCustomQuerySelector();
      alert('Reset Parsing Elements!');
    }
  };

  const applyQuerySelectors = async () => {
    if (!querySelectors) {
      alert('Something went wrong! Retry it later');
      return;
    }
    if (confirm('You want to apply parsing elements?')) {
      await setCustomQuerySelectors(querySelectors);
      alert('Applied Parsing Elements!');
    }
  };

  const loadCustomQuerySelector = async () => {
    const querySelectors = await getCustomQuerySelectors();

    if (!querySelectors) {
      alert('Something went wrong, please restart the plugin');
      return;
    }

    setQuerySelectors(querySelectors);
  };

  useEffect(() => {
    loadCustomQuerySelector();
  }, []);

  return (
    <dialog id="settingmodal" className="modal" open>
      {querySelectors === undefined && <Loading />}
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Setting</h3>
        <div className="p-4">
          <p className="mb-4">Parsing Elements</p>
          <div className="flex flex-col gap-2">
            {querySelectorList.map((item) => (
              <label className="form-control w-full" key={item.key}>
                <div className="label">
                  <span className="label-text uppercase">
                    {appendDashToCapitalLetter(item.key)}
                  </span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={item.selector}
                  onChange={handleSelectorChange(item.key)}
                />
                <div className="label">
                  <span className="label-text-alt">{item.desc}</span>
                </div>
              </label>
            ))}
          </div>
          <div className="flex mt-4 justify-between">
            <button
              className="btn btn-sm btn-error text-white"
              onClick={resetQuerySelectors}
            >
              Reset
            </button>
            <button className="btn btn-sm" onClick={applyQuerySelectors}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

const appendDashToCapitalLetter = (str: string) =>
  str.replace(/[A-Z]/g, (match) => `-${match}`);

export default SettingModal;
