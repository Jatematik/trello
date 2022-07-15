import React, { useState } from 'react';
import { cards, comments } from '../../store/fakeStore';

import { CommentTypeProps } from '../../types';
import { IButton } from '../../ui/IButton';
import { InputGroup } from '../../ui/InputGroup';

const Comment: React.FC<CommentProps> = ({ commentItem, setCardComments }) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [comment, setComment] = useState<CommentTypeProps>(commentItem);

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

  return (
    <div>
      {isUpdate ? (
        <InputGroup
          onClickBtn={updateComment}
          btnType="primary"
          inputValue={comment.comment}
        >
          Update comment
        </InputGroup>
      ) : (
        <>
          <span>{comment.comment}</span>
          <IButton btnType="primary" onClick={() => setIsUpdate(true)}>
            Update comment
          </IButton>
          <IButton btnType="danger" onClick={deleteComment}>
            Delete
          </IButton>
        </>
      )}
    </div>
  );
};

interface CommentProps {
  commentItem: CommentTypeProps;
  setCardComments: React.Dispatch<React.SetStateAction<CommentTypeProps[]>>;
}

export default Comment;
