import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export const IButton: React.FC<IButtonProps> = ({
  children,
  btnType,
  cssClass,
  ...props
}) => {
  const classes = ['btn', cssClass];

  switch (btnType) {
    case 'primary':
      classes.push('btn-primary');
      break;
    case 'info':
      classes.push('btn-info');
      break;
    case 'success':
      classes.push('btn-success');
      break;
    case 'warning':
      classes.push('btn-warning');
      break;
    case 'danger':
      classes.push('btn-danger');
      break;
    case 'inverse':
      classes.push('btn-inverse');
      break;
    case 'link':
      classes.push('btn-link');
      break;
    default:
      break;
  }

  return (
    <button className={classes.join(' ')} {...props}>
      {children}
    </button>
  );
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  cssClass?: string;
  btnType?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'inverse'
    | 'link';
}
