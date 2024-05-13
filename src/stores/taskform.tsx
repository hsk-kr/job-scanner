import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import type {
  DeleteSubCondition,
  MoveCondition,
  TaskFormContext,
} from '@/types/taskform';
import { JobCondition } from '@/types/job';

const TaskFormContext = createContext<TaskFormContext>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskFormContext = () => useContext(TaskFormContext);

const TaskFormContextProvider = ({ children }: { children?: ReactNode }) => {
  const [unusedSubConditions, setUnusedSubConditions] = useState<
    JobCondition['subConditions']
  >([]);
  const [conditions, setConditions] = useState<JobCondition[]>([
    { id: 'test', subConditions: [] },
  ]);

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

  const value = {
    unusedSubConditions,
    conditions,
    moveSubCondition,
    deleteSubCondition,
  };

  return (
    <TaskFormContext.Provider value={value}>
      {children}
    </TaskFormContext.Provider>
  );
};

export default TaskFormContextProvider;
