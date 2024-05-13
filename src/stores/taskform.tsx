import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { JobCondition } from '@/types/job';
import { v4 as uuidv4 } from 'uuid';

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

interface TaskFormContext {
  unusedSubConditions: JobCondition['subConditions'];
  conditions: JobCondition[];
  moveSubCondition: MoveCondition;
  deleteSubCondition: DeleteSubCondition;
  deleteCondition: (conditionId: string) => void;
  appendCondition: VoidFunction;
  appendSubCondition: AppendSubCondition;
}

const TaskFormContext = createContext<TaskFormContext>(null!);

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskFormContext = () => useContext(TaskFormContext);

const TaskFormContextProvider = ({ children }: { children?: ReactNode }) => {
  const [unusedSubConditions, setUnusedSubConditions] = useState<
    JobCondition['subConditions']
  >([]);
  const [conditions, setConditions] = useState<JobCondition[]>([]);

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

  const value = {
    unusedSubConditions,
    conditions,
    moveSubCondition,
    deleteCondition,
    deleteSubCondition,
    appendCondition,
    appendSubCondition,
  };

  return (
    <TaskFormContext.Provider value={value}>
      {children}
    </TaskFormContext.Provider>
  );
};

export default TaskFormContextProvider;
