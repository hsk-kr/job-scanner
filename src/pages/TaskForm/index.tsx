import TaskFormHeader from '@/components/task-form/TaskFormHeader';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TaskFormBody from '@/components/task-form/TaskFormBody';
import useJobTasks from '@/hooks/useJobTasks';
import { ComponentProps, useEffect, useState } from 'react';
import { getTask } from '@/utils/storage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px);
`;

const TaskForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [initialValue, setInitialValue] =
    useState<ComponentProps<typeof TaskFormBody>['initialValue']>();
  const { createJobTask, updateJobTask } = useJobTasks();
  const isEdit =
    searchParams.get('id') !== null && searchParams.get('isEdit') === 'true';
  const taskId = searchParams.get('id');

  const back = () => navigate(-1);

  const handleSubmit: ComponentProps<typeof TaskFormBody>['onSubmit'] = (
    form,
    jobConditions
  ) => {
    const task = {
      taskName: form.taskName,
      delay: form.delay,
      jobConditions: jobConditions,
    };

    if (isEdit && taskId) {
      updateJobTask(taskId, { ...task, status: 'ready' }).then(() =>
        navigate('/')
      );
    } else {
      createJobTask(task, jobConditions).then(() => navigate('/'));
    }
  };

  useEffect(() => {
    if (!taskId) return;

    const loadTask = async () => {
      const task = await getTask(taskId);

      if (!task) return;

      setInitialValue({
        taskName: task.taskName,
        delay: task.delay,
        jobConditions: task.jobConditions,
      });
    };

    loadTask();
  }, [taskId]);

  return (
    <Container>
      <TaskFormHeader onBack={back} />
      <TaskFormBody
        isEdit={isEdit}
        initialValue={initialValue}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default TaskForm;
