import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import { JobCondition } from '@/types/job';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TaskConditionListItem from './TaskConditionListItem';

interface TaskConditionListProps {
  items: JobCondition[];
  onJobConditionAdd?: (jobCondition: JobCondition) => void;
  onJobConditionRemove?: (jobXonditionId: string) => void;
  onSubConditionAdd?: (
    jobConditionId: string,
    subCondition: JobCondition['subConditions'][0]
  ) => void;
  onSubConditionRemove?: (
    jobConditionId: string,
    subConditionId: string
  ) => void;
}

const TaskConditionList = ({
  items,
  onJobConditionAdd,
  onJobConditionRemove,
  onSubConditionAdd,
  onSubConditionRemove,
}: TaskConditionListProps) => {
  const handleSubConditionAdd =
    (jobConditionId: string) =>
    (condition: JobCondition['subConditions'][0]) => {
      onSubConditionAdd?.(jobConditionId, condition);
    };

  const handleSubConditionDelete =
    (jobConditionId: string) => (subConditionId: string) => {
      onSubConditionRemove?.(jobConditionId, subConditionId);
    };

  const handleJobConditionAdd = () => {
    onJobConditionAdd?.({
      id: uuidv4(),
      subConditions: [],
    });
  };

  const handleJobConditionDelete = (jobConditionId: string) => () => {
    onJobConditionRemove?.(jobConditionId);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      p={2}
      sx={{ overflowY: 'auto' }}
      rowGap={2}
      data-testid="taskConditionList"
    >
      {items.map((item) => (
        <TaskConditionListItem
          key={item.id}
          deleteHidden={items.length <= 1}
          onConditionAdd={handleSubConditionAdd(item.id)}
          onConditionDelete={handleSubConditionDelete(item.id)}
          onDelete={handleJobConditionDelete(item.id)}
          subConditions={item.subConditions}
        />
      ))}
      <Box textAlign="center">
        <IconButton
          data-testid="jobConditionAddBtn"
          color="primary"
          onClick={handleJobConditionAdd}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskConditionList;
