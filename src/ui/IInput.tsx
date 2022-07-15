import React, { InputHTMLAttributes } from 'react';

export const IInput: React.FC<IInputProps> = ({ ...props }) => {
  return <input type="text" {...props} />;
};

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
