import React, { useState } from 'react';
import { cards } from '../../store';
import { CardTypeProps } from '../../types';
import { InputGroup } from '../../ui/InputGroup';

const CardTitle: React.FC<CardTitleProps> = ({ card }) => {
  const [isUpdateTitle, setIsUpdateTitle] = useState<boolean>(false);
  const [value, setValue] = useState<string>(card.title);

  const updateTitle = (value: string) => {
    if (value.trim()) {
      setValue(value);
      cards.forEach((item) => {
        if (item.id === card.id) {
          item.title = value;
        }
      });
      localStorage.setItem('cards', JSON.stringify(cards));
    }
    setIsUpdateTitle(false);
  };

  const openUpdateInput = () => setIsUpdateTitle(true);

  return (
    <div className="card-title">
      {isUpdateTitle ? (
        <InputGroup
          btnType="primary"
          onClickBtn={updateTitle}
          inputValue={value}
          isBlur
          className="input-text"
        >
          Ok
        </InputGroup>
      ) : (
        <h3 onClick={openUpdateInput}>{value}</h3>
      )}
    </div>
  );
};

interface CardTitleProps {
  card: CardTypeProps;
}

export default CardTitle;
