import React, { useState } from 'react';

import { cards, columns } from '../../store/fakeStore';
import { CardTypeProps, ColumnTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';
import { InputGroup } from '../../ui/InputGroup';
import { CardList } from '../CardList';
import { ColumnTitle } from '../ColumnTitle';

const Column: React.FC<ColumnProps> = ({ column }) => {
  const [isAddCard, setIsAddCard] = useState<boolean>(false);
  const [cardList, setCardList] = useState<CardTypeProps[]>(
    cards.filter((card) => card.columnId === column.id)
  );

  const visibleAddForm = () => setIsAddCard(!isAddCard);

  const addCard = (value: string) => {
    if (value.trim()) {
      const newCard = {
        id: Date.now(),
        title: value,
        desc: '',
        commentsIds: [],
        columnId: column.id,
      };

      setCardList((cards) => [...cards, newCard]);

      columns.forEach((item) => {
        if (item.id === column.id) {
          item.cardIds.push(newCard.id);
        }
      });

      cards.push(newCard);

      localStorage.setItem('columns', JSON.stringify(columns));
      localStorage.setItem('cards', JSON.stringify(cards));
    }
    setIsAddCard(false);
  };

  return (
    <div className="column">
      <ColumnTitle column={column} />
      <CardList cardList={cardList} setCardList={setCardList} />
      {isAddCard ? (
        <InputGroup
          btnType="primary"
          onClickBtn={addCard}
          handleClose={visibleAddForm}
        >
          Add
        </InputGroup>
      ) : (
        <IButton onClick={visibleAddForm}>Add Card</IButton>
      )}
    </div>
  );
};

interface ColumnProps {
  column: ColumnTypeProps;
}

export default Column;
