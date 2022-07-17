import React, { useState } from 'react';

import { cards, comments, userName } from '../../store/fakeStore';
import { CommentTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';
import { InputGroup } from '../../ui/InputGroup';

const Comment: React.FC<CommentProps> = ({ commentItem, setCardComments }) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [comment, setComment] = useState<CommentTypeProps>(commentItem);
  const name: string = userName || localStorage.getItem('name') || '';

  const deleteComment = () => {
    comments.splice(comments.indexOf(comment), 1);

    localStorage.setItem('comments', JSON.stringify(comments));

    setCardComments((comments) =>
      comments.filter((item) => item.id !== comment.id)
    );

    cards.forEach((item) => {
      if (item.id === comment.cardId) {
        item.commentsIds.splice(item.commentsIds.indexOf(comment.id), 1);
      }
    });

    localStorage.setItem('cards', JSON.stringify(cards));
  };

  const updateComment = (value: string) => {
    if (value) {
      const newComment: CommentTypeProps = {
        cardId: comment.cardId,
        comment: value,
        id: comment.id,
      };

      setComment(newComment);

      comments.forEach((item) => {
        if (item.id === commentItem.id) {
          item.comment = value;
        }
      });

      localStorage.setItem('comments', JSON.stringify(comments));
    }

    setIsUpdate(false);
  };

  const openUpdate = () => setIsUpdate(true);

  return (
    <div className="card-comment">
      <div className="avatar">{name[0]}</div>
      <div>
        <strong>{name}</strong>
        {isUpdate ? (
          <InputGroup
            onClickBtn={updateComment}
            btnType="primary"
            inputValue={comment.comment}
          >
            Save
          </InputGroup>
        ) : (
          <>
            <div>
              <p>{comment.comment}</p>
            </div>
          </>
        )}
        <div className="buttons">
          <IButton btnType="link" onClick={openUpdate}>
            Update comment
          </IButton>
          <IButton btnType="link" onClick={deleteComment}>
            Delete comment
          </IButton>
        </div>
      </div>
    </div>
  );
};

interface CommentProps {
  commentItem: CommentTypeProps;
  setCardComments: React.Dispatch<React.SetStateAction<CommentTypeProps[]>>;
}

export default Comment;
