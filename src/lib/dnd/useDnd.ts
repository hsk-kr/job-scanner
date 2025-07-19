import { useContext } from 'react';
import { DragNDropContext } from './context';

const useDnd = () => {
  return useContext(DragNDropContext);
};

export default useDnd;
