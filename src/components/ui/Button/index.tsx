import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  color?: 'primary' | 'secondary' | 'error' | 'ghost';
  outline?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ color = 'primary', outline, ...props }: Props) => {
  let className = twMerge(props.className, 'btn btn-sm');

  const addColorClassName = (className: string) => {
    switch (color) {
      case 'primary':
        return twMerge(className, 'btn-primary');
      case 'secondary':
        return twMerge(className, 'btn-secondary');
      case 'error':
        return twMerge(className, 'btn-error');
      case 'ghost':
        return twMerge(className, 'btn-ghost');
      case undefined:
        break;
    }

    return className;
  };

  const addDisabledClassName = (className: string) => {
    if (props.disabled) return twMerge(className, 'btn-disabled');
    return className;
  };

  className = addColorClassName(className);
  className = addDisabledClassName(className);
  className = twMerge(className, outline ? 'btn-outline' : undefined);

  return <button {...props} className={className} />;
};

export default Button;
