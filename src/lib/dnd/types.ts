import { DragItem } from '@/types/taskform';

type DragNDropKeyValueSet = {
  condition: DragItem;
};

export type DragNDropKeyValuePair = {
  [K in keyof DragNDropKeyValueSet]: {
    name: K;
    value: DragNDropKeyValueSet[K];
  };
}[keyof DragNDropKeyValueSet];

export type DragNDropName = keyof DragNDropKeyValueSet;

export type DragNDropValue<K extends DragNDropName> = DragNDropKeyValueSet[K];

export type StartDragCallback = () => boolean | void;

export type EndDragCallback = (data?: DragNDropKeyValuePair) => boolean | void;
