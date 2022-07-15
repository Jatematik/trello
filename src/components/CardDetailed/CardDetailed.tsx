import React, { useState } from 'react';
import { cards, columns } from '../../store/fakeStore';

import { CardTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';
import { Modal } from '../../ui/Modal';
import { CommentList } from '../CommentList';

const CardDetailed: React.FC<CardDetailedProps> = ({ card, setIsOpenCard }) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>(card.desc);

  const columnTitle = columns.filter((item) => item.id === card.columnId)[0]
    .title;

  const saveDescription = () => {
    cards.forEach((item) => {
      if (item.id === card.id) {
        item.desc = desc;
      }
    });

    localStorage.setItem('cards', JSON.stringify(cards));
    setIsOpenDesc(false);
  };

  const close = () => setIsOpenCard(false);

  return (
    <Modal>
      <div>
        <IButton onClick={close}>Close</IButton>
        <h3>{card.title}</h3>
        <p>
          In column <span>{columnTitle}</span>
        </p>
        <div>
          <div>
            <strong>Desc</strong>
            <IButton btnType="primary" onClick={() => setIsOpenDesc(true)}>
              {desc ? 'Update description' : 'Add description'}
            </IButton>
          </div>

          {isOpenDesc ? (
            <div>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              ></textarea>
              <div>
                <IButton btnType="primary" onClick={saveDescription}>
                  Save
                </IButton>
                <IButton
                  btnType="danger"
                  onClick={() => {
                    setIsOpenDesc(false);
                    setDesc(card.desc);
                  }}
                >
                  Cancel
                </IButton>
              </div>
            </div>
          ) : (
            <p>{desc ? desc : 'No desc'}</p>
          )}
        </div>
        <div>
          <CommentList cardId={card.id} />
        </div>
      </div>
    </Modal>
  );
};

interface CardDetailedProps {
  card: CardTypeProps;
  setIsOpenCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default CardDetailed;
