import { ComponentProps, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import { JobCondition } from '@/types/job';
import TaskConditionList from './TaskConditionList';
import ConditionCheckModal from '../ConditionCheckModal';

interface TaskFormBodyProps {
  isEdit?: boolean;
}

export interface ITaskForm {
  taskName: string;
  delay: number;
}

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TaskFormBody = ({ isEdit }: TaskFormBodyProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ITaskForm>();
  const [modalOpen, setModalOpen] = useState(false);
  const [jobConditions, setJobConditions] = useState<JobCondition[]>([]);
  const submitButtonColor = isEdit ? 'warning' : 'primary';
  const submitButtonText = isEdit ? 'Update Task' : 'Create Task';

  const onSubmit: SubmitHandler<ITaskForm> = (data) => {
    console.log(data);
  };

  const toggleModalOpen = () => {
    setModalOpen((prevModalOpen) => !prevModalOpen);
  };

  const handleJobConditionAdd: ComponentProps<
    typeof TaskConditionList
  >['onJobConditionAdd'] = (jobCondition) => {
    setJobConditions((prevJobConditions) =>
      prevJobConditions.concat(jobCondition)
    );
  };

  const handleJobConditionRemove: ComponentProps<
    typeof TaskConditionList
  >['onJobConditionRemove'] = (jobConditionId) => {
    setJobConditions((prevJobConditions) =>
      prevJobConditions.filter((jc) => jc.id !== jobConditionId)
    );
  };

  const handleSubConditionAdd: ComponentProps<
    typeof TaskConditionList
  >['onSubConditionAdd'] = (jobConditionId, subCondition) => {
    setJobConditions((prevJobConditions) =>
      prevJobConditions.map((jc) => {
        if (jc.id === jobConditionId) {
          jc.subConditions = jc.subConditions.concat(subCondition);
          return jc;
        }

        return jc;
      })
    );
  };

  const handleSubConditionRemove: ComponentProps<
    typeof TaskConditionList
  >['onSubConditionRemove'] = (jobConditionId, subConditionId) => {
    setJobConditions((prevJobConditions) =>
      prevJobConditions.map((jc) => {
        if (jc.id === jobConditionId) {
          jc.subConditions = jc.subConditions.filter(
            (sc) => sc.id !== subConditionId
          );
          return jc;
        }

        return jc;
      })
    );
  };

  useEffect(() => {
    setJobConditions([{ id: uuidv4(), subConditions: [] }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        void handleSubmit(onSubmit)();
      }}
    >
      <Box display="flex" flexDirection="column" rowGap={2} mt={2}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color={submitButtonColor}
        >
          {submitButtonText}
        </Button>
        <Box display="flex" columnGap={1}>
          <TextField
            {...register('taskName', {
              required: 'Task Name is required.',
              maxLength: 12,
            })}
            sx={{ flex: 1 }}
            label="Task Name"
            error={errors.taskName !== undefined}
            helperText={errors.taskName?.message}
          />
          <Tooltip title="Delay before moving on to the next job ad (500ms recommended)">
            <TextField
              {...register('delay', {
                required: 'Delay is required.',
                min: {
                  value: 250,
                  message: 'Delay must be greater than or equal to 250.',
                },
                max: {
                  value: 10000,
                  message: 'Delay must be less than or equal to 10000.',
                },
              })}
              sx={{ flex: 1 }}
              label="Delay(ms)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              error={errors.delay !== undefined}
              helperText={errors.delay?.message}
            />
          </Tooltip>
        </Box>
        <Divider />
      </Box>
      <Alert severity="info">
        Jobs that meet all conditions will be found.
      </Alert>
      <TaskConditionList
        items={jobConditions}
        onJobConditionAdd={handleJobConditionAdd}
        onJobConditionRemove={handleJobConditionRemove}
        onSubConditionAdd={handleSubConditionAdd}
        onSubConditionRemove={handleSubConditionRemove}
      />
      <Button
        data-testid="conditionCheckOpenBtn"
        fullWidth
        variant="contained"
        color="info"
        sx={{ marginTop: 1 }}
        onClick={toggleModalOpen}
      >
        Condition Check
      </Button>
      <ConditionCheckModal visible={modalOpen} onClose={toggleModalOpen} />
    </Form>
  );
};

export default TaskFormBody;
