import TaskFormHeader from '@/components/task-form/TaskFormHeader';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TaskFormBody from '@/components/task-form/TaskFormBody';
import useJobTasks from '@/hooks/useJobTasks';
import { ComponentProps, useEffect, useState } from 'react';
import {
  clearDraftTaskFormData,
  draftTaskFormData,
  getTask,
  loadDraftTaskFormData,
} from '@/utils/storage';

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

  const back = async () => {
    await clearDraftTaskFormData();
    navigate(-1);
  };

  const handleSubmit: ComponentProps<typeof TaskFormBody>['onSubmit'] = async (
    form,
    jobConditions
  ) => {
    await clearDraftTaskFormData();

    const task = {
      taskName: form.taskName,
      delay: form.delay,
      jobConditions: jobConditions,
    };

    if (isEdit && taskId) {
      await updateJobTask(taskId, { ...task, status: 'ready' });
    } else {
      await createJobTask(task, jobConditions);
    }

    navigate('/');
  };

  const saveDraftTaskFormData: ComponentProps<
    typeof TaskFormBody
  >['onDataChange'] = (value) => {
    draftTaskFormData({
      taskId,
      isEdit,
      value,
    });
  };

  useEffect(() => {
    const loadTask = async () => {
      const draftData = await loadDraftTaskFormData();

      if (draftData) {
        // if there is saved task form data, load that
        setInitialValue({
          taskName: draftData.value.taskName ?? '',
          delay: draftData.value.delay ?? '',
          jobConditions: draftData.value.jobConditions ?? [],
        });
      } else if (taskId) {
        const task = await getTask(taskId);

        if (!task) return;

        setInitialValue({
          taskName: task.taskName,
          delay: task.delay,
          jobConditions: task.jobConditions,
        });
      }
    };

    loadTask();
  }, [taskId]);

  return (
    <Container>
      <TaskFormHeader onBack={back} />
      <TaskFormBody
        isEdit={isEdit}
        initialValue={initialValue}
        onDataChange={saveDraftTaskFormData}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default TaskForm;
