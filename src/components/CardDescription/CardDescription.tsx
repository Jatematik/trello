import React, { ChangeEvent, useState } from 'react';

import { cards } from '../../store';
import { CardTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';

const CardDescription: React.FC<CardDescriptionProps> = ({ card }) => {
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>(card.desc);

  const saveDescription = () => {
    cards.forEach((item) => {
      if (item.id === card.id) {
        item.desc = desc;
      }
    });

    localStorage.setItem('cards', JSON.stringify(cards));
    setIsOpenDesc(false);
  };

  const change = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDesc(e.target.value);

  const openDesc = () => setIsOpenDesc(true);

  const cancel = () => {
    setIsOpenDesc(false);
    setDesc(card.desc);
  };

  return (
    <div className="description">
      <div className="card-description">
        <h3>Description</h3>
        <IButton btnType="link" onClick={openDesc} cssClass="btn-description">
          {desc ? 'Update description' : 'Add description'}
        </IButton>
      </div>

      {isOpenDesc ? (
        <div>
          <textarea
            onChange={change}
            value={desc}
            className="card-textarea"
          ></textarea>
          <div className="buttons">
            <IButton btnType="primary" onClick={saveDescription}>
              Save
            </IButton>
            <IButton btnType="danger" onClick={cancel}>
              Cancel
            </IButton>
          </div>
        </div>
      ) : (
        <p className="description-text">{desc ? desc : 'Added description'}</p>
      )}
    </div>
  );
};

interface CardDescriptionProps {
  card: CardTypeProps;
}

export default CardDescription;
