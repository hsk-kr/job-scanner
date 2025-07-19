import {
  Children,
  cloneElement,
  ReactElement,
  HTMLAttributes,
  useCallback,
} from 'react';
import useDnd from '../useDnd';
import { DragNDropName, DragNDropValue, StartDragCallback } from '../types';

type Props<K extends DragNDropName> = {
  children: ReactElement<
    Pick<HTMLAttributes<HTMLElement>, 'draggable' | 'onDragStart'>
  >;
  name: K;
  value: DragNDropValue<K>;
  onDragStart?: StartDragCallback;
};

export const Drag = <K extends DragNDropName>({
  children,
  name,
  value,
  onDragStart,
}: Props<K>) => {
  const { startDrag } = useDnd();

  const handleDragStart = useCallback(() => {
    startDrag(onDragStart, { name, value });
  }, [name, value, onDragStart, startDrag]);

  return Children.map(children, (child) =>
    cloneElement(child, {
      ...child.props,
      draggable: true,
      onDragStart: handleDragStart,
    })
  );
};

export default Drag;
