import React, { useState } from 'react';

import './App.css';
import { ColumnContainer } from './layouts/ColumnContainer';
import { columns, userName } from './store/fakeStore';
import { InputGroup } from './ui/InputGroup';
import { Modal } from './ui/Modal';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(userName ? false : true);

  if (!localStorage.getItem('columns')) {
    localStorage.setItem('columns', JSON.stringify(columns));
  }

  const saveName = (name: string) => {
    if (name.trim()) {
      setIsOpen(false);
      localStorage.setItem('name', name);
    }
  };

  return (
    <div>
      {isOpen ? (
        <Modal>
          <h2>Please enter your name</h2>
          <InputGroup onClickBtn={saveName} btnType="primary">
            Ok
          </InputGroup>
        </Modal>
      ) : (
        <></>
      )}

      <ColumnContainer />
    </div>
  );
}

export default App;
