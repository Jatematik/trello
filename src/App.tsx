import React from 'react';

import './App.css';
import { ColumnContainer } from './layouts/ColumnContainer';
import { columns } from './store/fakeStore';

function App() {
  if (!localStorage.getItem('columns')) {
    localStorage.setItem('columns', JSON.stringify(columns));
  }

  return (
    <div>
      <ColumnContainer />
    </div>
  );
}

export default App;
