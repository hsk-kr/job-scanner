import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { JobCondition } from '@/types/job';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'react-router-dom';
import { ITaskForm } from '@/types/taskform';
import {
  draftTaskFormData,
  getTask,
  loadDraftTaskFormData,
} from '@/utils/storage';
import Loading from '@/components/Loading';
import { UseFormReturn, useForm } from 'react-hook-form';

/**
 * If conditionId does not exist in `from`, it means the data came from unusedConditions.
 * If conditionId does not exist in `to`, it means the data gets into the unusedConditions.
 */
type MoveCondition = (
  from: { conditionId?: string; subConditionId: string },
  to: { conditionId?: string }
) => void;

/**
 * If conditionId exists, it means subCondition is in one of the usedConditions
 * Otherwise, it places in the unusedSubConditions;
 */
type DeleteSubCondition = (params: {
  conditionId?: string;
  subConditionId: string;
}) => void;

type AppendSubCondition = (
  props: Omit<JobCondition['subConditions'][0], 'id'>
) => void;

type InitialValue = {
  taskName: string;
  delay: string;
  jobConditions: JobCondition[];
  unusedSubConditions: JobCondition['subConditions'];
};

interface TaskFormContext {
  unusedSubConditions: JobCondition['subConditions'];
  conditions: JobCondition[];
  moveSubCondition: MoveCondition;
  deleteSubCondition: DeleteSubCondition;
  deleteCondition: (conditionId: string) => void;
  appendCondition: VoidFunction;
  appendSubCondition: AppendSubCondition;
  isEdit: boolean;
  taskId: string;
  form: UseFormReturn<ITaskForm>;
}

const TaskFormContext = createContext<TaskFormContext>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskForm = () => useContext(TaskFormContext);

const TaskFormContextProvider = ({ children }: { children?: ReactNode }) => {
  const [unusedSubConditions, setUnusedSubConditions] = useState<
    JobCondition['subConditions']
  >([]);
  const [conditions, setConditions] = useState<JobCondition[]>([]);
  const [initialValue, setInitialValue] = useState<InitialValue>();
  const form = useForm<ITaskForm>({});
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get('id') ?? '';
  const isEdit =
    searchParams.get('id') !== null && searchParams.get('isEdit') === 'true';
  const [loading, setLoading] = useState(true);
  const { taskName, delay } = form.watch();

  const appendCondition = useCallback(() => {
    setConditions((prevConditions) =>
      prevConditions.concat({
        id: uuidv4(),
        subConditions: [],
      })
    );
  }, []);

  const appendSubCondition: AppendSubCondition = useCallback((props) => {
    setUnusedSubConditions((prevUnusedSubConditions) =>
      prevUnusedSubConditions.concat({
        id: uuidv4(),
        ...props,
      })
    );
  }, []);

  const deleteCondition = useCallback((conditionId: string) => {
    setConditions((prevConditions) =>
      prevConditions.filter((c) => c.id !== conditionId)
    );
  }, []);

  const deleteSubCondition: DeleteSubCondition = useCallback(
    ({ conditionId, subConditionId }) => {
      if (!conditionId) {
        setUnusedSubConditions((prevUnusedSubConditions) =>
          prevUnusedSubConditions.filter((sc) => sc.id !== subConditionId)
        );
        return;
      }

      setConditions((c) =>
        c.map((c) => {
          if (c.id === conditionId) {
            c.subConditions = c.subConditions.filter(
              (sc) => sc.id !== subConditionId
            );
          }
          return c;
        })
      );
    },
    []
  );

  const moveSubCondition = useCallback<MoveCondition>(
    (from, to) => {
      try {
        let newUnusedSubConditions = [...unusedSubConditions];
        const newConditions = [...conditions];
        let hasUnusedSubConditionsUpdated = false;
        let hasConditionsUpdated = false;

        // Find condition will move and remove it
        let fromCondition;
        if (!from.conditionId) {
          newUnusedSubConditions = newUnusedSubConditions.filter((c) => {
            if (c.id === from.subConditionId) fromCondition = c;
            return c.id !== from.subConditionId;
          });
          if (!fromCondition)
            throw new Error(
              `cannot find subCondition in unusedSubConditions - ${from.subConditionId}`
            );
          hasUnusedSubConditionsUpdated = true;
        } else {
          const condition = newConditions.find(
            (c) => c.id === from.conditionId
          );
          if (!condition)
            throw new Error(
              `cannot find condition in conditions - ${from.conditionId}`
            );

          condition.subConditions = condition.subConditions.filter((sc) => {
            if (sc.id === from.subConditionId) fromCondition = sc;
            return sc.id !== from.subConditionId;
          });
          if (!fromCondition)
            throw new Error(
              `cannot find subCondition in conditions - ${from.conditionId}/${from.subConditionId}`
            );
          hasConditionsUpdated = true;
        }

        // Move the condition finded in the previous step to the target list
        if (to.conditionId) {
          const condition = newConditions.find((c) => c.id === to.conditionId);
          condition?.subConditions.push(fromCondition);
          hasConditionsUpdated = true;
        } else {
          newUnusedSubConditions.push(fromCondition);
          hasUnusedSubConditionsUpdated = true;
        }

        // Update states
        if (hasConditionsUpdated) setConditions(newConditions);
        if (hasUnusedSubConditionsUpdated)
          setUnusedSubConditions(newUnusedSubConditions);
      } catch (e) {
        console.error(e);
      }
    },
    [conditions, unusedSubConditions]
  );

  useEffect(() => {
    setLoading(true);
    const loadTask = async () => {
      const draftData = await loadDraftTaskFormData();
      if (draftData) {
        setInitialValue({
          taskName: draftData.value.taskName ?? '',
          delay: draftData.value.delay ?? '',
          jobConditions: draftData.value.jobConditions ?? [],
          unusedSubConditions: draftData.value.unusedSubConditions ?? [],
        });
      } else if (taskId) {
        const task = await getTask(taskId);
        if (!task) return;

        setInitialValue({
          taskName: task.taskName,
          delay: task.delay.toString(),
          jobConditions: task.jobConditions,
          unusedSubConditions: [],
        });
      } else {
        setInitialValue({
          taskName: '',
          delay: '',
          jobConditions: [
            {
              id: uuidv4(),
              subConditions: [],
            },
          ],
          unusedSubConditions: [],
        });
      }
    };

    loadTask().finally(() => setLoading(false));
  }, [taskId]);

  useEffect(() => {
    if (!initialValue) return;
    const delay = Number(initialValue.delay);
    form.setValue('taskName', initialValue.taskName);
    if (!Number.isNaN(delay)) {
      form.setValue('delay', delay);
    }
    setConditions(initialValue.jobConditions);
    setUnusedSubConditions(initialValue.unusedSubConditions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  useEffect(() => {
    const release = draftTaskFormData({
      taskId,
      isEdit,
      value: {
        taskName,
        delay: delay?.toString() ?? '',
        unusedSubConditions,
        jobConditions: conditions,
      },
    });

    return () => {
      release();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unusedSubConditions, conditions, taskName, delay]);

  const value = {
    unusedSubConditions,
    conditions,
    isEdit,
    taskId,
    form,
    moveSubCondition,
    deleteCondition,
    deleteSubCondition,
    appendCondition,
    appendSubCondition,
  };

  return (
    <TaskFormContext.Provider value={value}>
      {loading && <Loading />}
      {children}
    </TaskFormContext.Provider>
  );
};

export default TaskFormContextProvider;
