import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Select from '@/components/ui/Select';
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
          <label className="flex gap-2 items-center">
            <span className="label text-sm">Not</span>
            <Checkbox {...register('not')} />
          </label>
        </div>
        <div className="form-control">
          <label className="flex gap-2 items-center">
            <span className="label text-sm">Case Insensitive</span>
            <Checkbox {...register('caseInsensitive')} />
          </label>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Select
          {...register('target')}
          className="select select-bordered max-w-xs"
        >
          <option value="title">Job Title</option>
          <option value="description">Job Description</option>
          <option value="additional_info">Job Additional Info</option>
          <option value="applicants">Applicants</option>
        </Select>
        <Select {...register('operator')}>
          <option value="=">=</option>
          <option value="!=">!=</option>
          <option value="<">{'<'}</option>
          <option value="<=">{'<='}</option>
          <option value=">">{'>'}</option>
          <option value=">=">{'>='}</option>
        </Select>
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
        <Button type="submit" color="primary" className="ml-2">
          Add Condition
        </Button>
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
