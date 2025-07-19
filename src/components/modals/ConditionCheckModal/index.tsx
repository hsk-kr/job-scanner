import { JobCondition } from '@/types/job';
import { ChangeEvent, useState } from 'react';
import { checkJobConditions } from '@/utils/condition';
import { IoMdClose } from 'react-icons/io';

interface ConditionCheckModalProps {
  visible: boolean;
  jobConditions?: JobCondition[];
  onClose?: VoidFunction;
}

interface IForm {
  title: string;
  description: string;
  additionalInfo: string;
}

interface Result {
  state: 'pass' | 'fail';
  count: number;
}

const ConditionCheckModal = ({
  visible,
  jobConditions = [],
  onClose,
}: ConditionCheckModalProps) => {
  const [form, setForm] = useState<IForm>({
    title: '',
    description: '',
    additionalInfo: '',
  });
  const [result, setResult] = useState<Result>();

  const handleFormChange =
    (key: keyof IForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prevForm) => ({
        ...prevForm,
        [key]: e.target.value,
      }));
    };

  const check = () => {
    const pass = checkJobConditions(
      form.title,
      form.description,
      form.additionalInfo,
      jobConditions
    );

    setResult((prevResult) => {
      let count = (prevResult?.count ?? 0) + 1;

      if (
        (prevResult?.state === 'pass' && !pass) ||
        (prevResult?.state === 'fail' && pass)
      ) {
        count = 1;
      }

      const state: Result['state'] = pass ? 'pass' : 'fail';

      return {
        state,
        count,
      };
    });
  };

  if (!visible) return null;

  const resultColor =
    result?.state === 'pass' ? 'text-blue-500' : 'text-red-500';
  return (
    <div
      className="flex flex-col gap-4 fixed z-40 top-4 bottom-4 right-4 left-4 bg-base-300 rounded-lg p-8 border border-color-white"
      data-testid="conditionCheckModal"
    >
      <div>
        <h1 className="text-xl">Condition Checker</h1>
        <IoMdClose
          className="absolute top-2 right-2 text-2xl text-white cursor-pointer hover:scale-110 transition-all"
          role="button"
          onClick={onClose}
          data-testid="conditionCheckModalCloseBtn"
        />
      </div>
      <div>
        <input
          type="text"
          data-testid="title"
          placeholder="Job Title"
          className="input w-full my-2"
          onChange={handleFormChange('title')}
          value={form.title}
        />
        <input
          type="text"
          data-testid="additional_info"
          placeholder="Job Additional Info"
          className="input w-full my-2"
          onChange={handleFormChange('additionalInfo')}
          value={form.additionalInfo}
        />
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Job Description"
          data-testid="desc"
          rows={9}
          onChange={handleFormChange('description')}
          value={form.description}
        ></textarea>
      </div>
      <div className="flex gap-2 justify-end items-center">
        {result && (
          <>
            <span className="text-sm">RESULT:</span>
            <span className={`text-sm uppercase ${resultColor}`}>
              {`${result.state} (${result.count})`}
            </span>
          </>
        )}
        <button
          className="btn btn-sm btn-success text-white"
          data-testid="checkBtn"
          onClick={check}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default ConditionCheckModal;
