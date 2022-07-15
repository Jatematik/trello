import React, { ReactNode } from 'react';

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="overlay">
      <div className="modal-block">{children}</div>
    </div>
  );
};

interface ModalProps {
  children: ReactNode;
}
