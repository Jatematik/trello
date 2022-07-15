import React from 'react';

import { CardTypeProps } from '../../types';
import Card from '../Card/Card';

const CardList: React.FC<CardListProps> = ({ cardList, setCardList }) => {
  return (
    <ul className="unstyled">
      {cardList.map((card) => (
        <Card key={card.id.toString()} card={card} setCardList={setCardList} />
      ))}
    </ul>
  );
};

interface CardListProps {
  cardList: CardTypeProps[];
  setCardList: React.Dispatch<React.SetStateAction<CardTypeProps[]>>;
}

export default CardList;
