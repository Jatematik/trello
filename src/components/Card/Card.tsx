import React, { useState } from 'react';

import { cards, columns, comments } from '../../store/fakeStore';
import { CardTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';
import { CardDetailed } from '../CardDetailed';

const Card: React.FC<CardProps> = ({ card, setCardList }) => {
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);

  const deleteCard = () => {
    columns.forEach((item) => {
      if (item.id === card.columnId) {
        item.cardIds.splice(item.cardIds.indexOf(card.id), 1);
      }
    });

    cards.splice(cards.indexOf(card), 1);

    localStorage.setItem('cards', JSON.stringify(cards));

    setCardList((cards) => cards.filter((item) => item.id !== card.id));

    const filterComment = comments.filter((item) => item.cardId !== card.id);

    localStorage.setItem('comments', JSON.stringify(filterComment));
  };

  const openCard = () => setIsOpenCard(!isOpenCard);

  return (
    <>
      <li className="card" onClick={openCard}>
        <h5>{card.title}</h5>
        <div className="card-footer">
          <div>comment counts: {card.commentsIds.length}</div>
          <IButton btnType="danger" onClick={deleteCard}>
            <i className="icon-remove icon-white" />
          </IButton>
        </div>
      </li>
      {isOpenCard ? (
        <CardDetailed card={card} setIsOpenCard={setIsOpenCard} />
      ) : (
        <></>
      )}
    </>
  );
};

interface CardProps {
  card: CardTypeProps;
  setCardList: React.Dispatch<React.SetStateAction<CardTypeProps[]>>;
}

export default Card;
