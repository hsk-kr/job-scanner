import { useTaskForm } from '@/stores/taskform';
import { ITaskSubConditionForm } from '@/types/taskform';
import { SubmitHandler, useForm } from 'react-hook-form';

const SubConditionCreateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ITaskSubConditionForm>({
    defaultValues: {
      caseInsensitive: true,
      operator: '>=',
      text: '',
    },
  });
  const target = watch('target');
  const { appendSubCondition } = useTaskForm();

  const submit: SubmitHandler<ITaskSubConditionForm> = (data) => {
    // applicants doesn't need to have text field, therefore it removes the text field
    // when the target is applicatns, to reduce confusion.
    if (data.target === 'applicants') {
      data.text = '';
    }
    appendSubCondition(data);
  };

  // Frequency still remains with the name frequency but when the target is applicants,
  // it checks the number of applicants is the same with the frequency,
  // therefore, the name, frequency, may make a confusion so, it displays a different name depending on the type.
  const frequencyLabel = target === 'applicants' ? 'Number' : 'Frequency';

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(submit)();
      }}
    >
      <div className="flex gap-4">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Not</span>
            <input
              {...register('not')}
              type="checkbox"
              className="checkbox checkbox-info"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mr-2">Case Insensitive</span>
            <input
              {...register('caseInsensitive')}
              type="checkbox"
              className="checkbox checkbox-info"
            />
          </label>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <select
          {...register('target')}
          className="select select-bordered max-w-xs"
        >
          <option value="title">Job Title</option>
          <option value="description">Job Description</option>
          <option value="additional_info">Job Additional Info</option>
          <option value="applicants">Applicants</option>
        </select>
        <select
          {...register('operator')}
          className="select select-bordered max-w-xs"
        >
          <option value="=">=</option>
          <option value="!=">!=</option>
          <option value="<">{'<'}</option>
          <option value="<=">{'<='}</option>
          <option value=">">{'>'}</option>
          <option value=">=">{'>='}</option>
        </select>
        <input
          {...register('frequency', {
            required: `${frequencyLabel} is required.`,
            valueAsNumber: true,
            min: {
              value: 0,
              message: `${frequencyLabel}must be a positive number.`,
            },
          })}
          type="number"
          placeholder={frequencyLabel}
          className={`input input-bordered w-36 ${errors.frequency ? 'input-error' : ''}`}
        />
        <button type="submit" className="btn btn-neutral ml-2">
          Create Condition
        </button>
      </div>
      {target !== 'applicants' && (
        <input
          {...register('text', {
            required: 'Keyword is required.',
            maxLength: 255,
          })}
          type="text"
          className={`input input-bordered ${errors.text ? 'input-error' : ''}`}
          placeholder="Keyword"
        />
      )}
    </form>
  );
};

export default SubConditionCreateForm;
