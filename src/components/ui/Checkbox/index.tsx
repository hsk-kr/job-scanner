import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<HTMLAttributes<HTMLInputElement>, 'type'>;

const Checkbox = (props: Props) => {
  const className = twMerge(
    props.className,
    'checkbox checkbox-sm checkbox-primary'
  );

  return <input type="checkbox" {...props} className={className} />;
};

export default Checkbox;
