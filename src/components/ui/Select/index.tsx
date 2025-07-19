import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLSelectElement>;

const Select = (props: Props) => {
  const className = twMerge(props.className, 'select select-bordered max-w-xs');

  return <select {...props} className={className} />;
};

export default Select;
