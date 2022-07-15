import React, { useState } from 'react';

import { columns } from '../../store/fakeStore';
import { ColumnTypeProps } from '../../types';
import { InputGroup } from '../../ui/InputGroup';

const ColumnTitle: React.FC<ColumnTitleProps> = ({ column }) => {
  const [isUpdateTitle, setIsUpdateTitle] = useState<boolean>(false);
  const [value, setValue] = useState<string>(column.title);

  const updateTitle = (value: string) => {
    if (value.trim()) {
      setValue(value);
      columns.forEach((item: ColumnTypeProps) => {
        if (item.id === column.id) {
          item.title = value;
        }
      });
      localStorage.setItem('columns', JSON.stringify(columns));
    }
    setIsUpdateTitle(false);
  };

  const openUpdateInput = () => setIsUpdateTitle(true);

  return (
    <div className="column-title">
      {isUpdateTitle ? (
        <InputGroup
          btnType="primary"
          onClickBtn={updateTitle}
          inputValue={value}
          isBlur
        >
          Ok
        </InputGroup>
      ) : (
        <h3 onClick={openUpdateInput}>{value}</h3>
      )}
    </div>
  );
};

interface ColumnTitleProps {
  column: ColumnTypeProps;
}

export default ColumnTitle;
