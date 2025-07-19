import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  DragNDropKeyValuePair,
  DragNDropName,
  EndDragCallback,
  StartDragCallback,
} from './types';

type DragNDropContextType = {
  dragging: boolean;
  startDrag: (
    callback?: StartDragCallback,
    data?: DragNDropKeyValuePair
  ) => void;
  endDrag: (name: DragNDropName, callback?: EndDragCallback) => void;
};

export const DragNDropContext = createContext<DragNDropContextType>(
  {} as DragNDropContextType
);

export const DragNDropProvider = ({ children }: { children?: ReactNode }) => {
  const [dragging, setDragging] =
    useState<DragNDropContextType['dragging']>(false);
  const [data, setData] = useState<DragNDropKeyValuePair | undefined>(
    undefined
  );

  const startDrag: DragNDropContextType['startDrag'] = useCallback(
    (callback, data) => {
      const hasCallbackReturnedFalse = callback?.() === false;

      if (hasCallbackReturnedFalse) return;
      setData(data);
      setDragging(true);
    },
    [dragging]
  );

  const endDrag: DragNDropContextType['endDrag'] = useCallback(
    (name, callback) => {
      const areDifferentNames = data && name !== data?.name;
      const hasCallbackReturnedFalse = callback?.(data) === false;

      if (!dragging || areDifferentNames || hasCallbackReturnedFalse) return;
      setDragging(false);
    },
    [data, dragging]
  );

  useEffect(() => {
    const setDraggingFalse = () => setDragging(false);

    window.addEventListener('dragend', setDraggingFalse, { capture: true });

    return () => {
      window.removeEventListener('dragend', setDraggingFalse);
    };
  }, []);

  return (
    <DragNDropContext value={{ dragging, startDrag, endDrag }}>
      {children}
    </DragNDropContext>
  );
};
