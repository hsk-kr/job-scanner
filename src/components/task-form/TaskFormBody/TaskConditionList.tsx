import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import { JobCondition } from '@/types/job';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ITaskForm } from '.';
import TaskConditionListItem from './TaskConditionListItem';

interface TaskConditionListProps {
  fields: FieldArrayWithId<ITaskForm, 'conditions', 'id'>[];
  append: UseFieldArrayAppend<ITaskForm, 'conditions'>;
  remove: UseFieldArrayRemove;
  update: UseFieldArrayUpdate<ITaskForm, 'conditions'>;
}

const TaskConditionList = ({
  fields,
  append,
  remove,
  update,
}: TaskConditionListProps) => {
  const handleListItemConditionAdd =
    (index: number) => (condition: JobCondition['conditions'][0]) => {
      //! TaskConditionListItem is intialized since it leads to the whole item change.
      update(index, {
        ...fields[index],
        conditions: fields[index].conditions.concat(condition),
      });
    };

  const handleListItemConditionDelete =
    (index: number) => (conditionIdx: number) => {
      //! TaskConditionListItem is intialized since it leads to the whole item change.
      update(index, {
        ...fields[index],
        conditions: fields[index].conditions.filter(
          (_, idx) => idx !== conditionIdx
        ),
      });
    };

  const handleConditionAdd = () => {
    append({
      key: uuidv4(),
      conditions: [],
    });
  };

  const handleConditionDelete = (index: number) => () => {
    remove(index);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      p={2}
      sx={{ overflowY: 'auto' }}
      rowGap={2}
    >
      {fields.map((field, index) => (
        <TaskConditionListItem
          key={field.id}
          initialConditions={field.conditions}
          deleteHidden={fields.length <= 1}
          onConditionAdd={handleListItemConditionAdd(index)}
          onConditionDelete={handleListItemConditionDelete(index)}
          onDelete={handleConditionDelete(index)}
        />
      ))}
      <Box textAlign="center">
        <IconButton color="primary" onClick={handleConditionAdd}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskConditionList;
