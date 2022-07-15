import React from 'react';

import { Column } from '../../components/Column';
import { columns } from '../../store/fakeStore';
import { ColumnTypeProps } from '../../types';

const ColumnContainer: React.FC = () => {
  return (
    <div className="column-container">
      {columns.map((column: ColumnTypeProps) => (
        <Column key={column.id.toString()} column={column} />
      ))}
    </div>
  );
};

export default ColumnContainer;
