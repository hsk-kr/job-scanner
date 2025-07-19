import {
  Children,
  cloneElement,
  ReactElement,
  HTMLAttributes,
  useCallback,
  DragEvent,
} from 'react';
import useDnd from '../useDnd';
import { DragNDropName, EndDragCallback } from '../types';

type Props = {
  children: ReactElement<
    Pick<HTMLAttributes<HTMLElement>, 'onDrop' | 'onDragOver'>
  >;
  name: DragNDropName;
  onDrop?: EndDragCallback;
};

const Drop = ({ children, name, onDrop }: Props) => {
  const { endDrag } = useDnd();

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      endDrag(name, onDrop);
    },
    [name, onDrop, endDrag]
  );

  const onDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
  }, []);

  return Children.map(children, (child) =>
    cloneElement(child, { ...child.props, onDrop: handleDrop, onDragOver })
  );
};

export default Drop;
