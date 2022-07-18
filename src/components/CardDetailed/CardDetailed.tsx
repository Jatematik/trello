import React from 'react';

import { useCloseOnKey } from '../../hooks/useCloseOnKey';
import { columns } from '../../store';
import { CardTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';
import { Modal } from '../../ui/Modal';
import { CardDescription } from '../CardDescription';
import { CardTitle } from '../CardTitle';
import { CommentList } from '../CommentList';

const CardDetailed: React.FC<CardDetailedProps> = ({ card, setIsOpenCard }) => {
  const columnTitle = columns.filter((item) => item.id === card.columnId)[0]
    .title;

  const close = () => setIsOpenCard(false);

  useCloseOnKey('Escape', close);

  return (
    <Modal>
      <div className="card-detailed">
        <IButton onClick={close} btnType="inverse" cssClass="close-btn">
          <i className="icon-remove icon-white"></i>
        </IButton>
        <CardTitle card={card} />
        <p>
          In column <strong>{columnTitle}</strong>
        </p>
        <h3>Author: {localStorage.getItem('name')}</h3>
        <CardDescription card={card} />
        <CommentList cardId={card.id} />
      </div>
    </Modal>
  );
};

interface CardDetailedProps {
  card: CardTypeProps;
  setIsOpenCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default CardDetailed;
