import React, { InputHTMLAttributes } from 'react';

export const IInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input type="text" {...props} />;
};
