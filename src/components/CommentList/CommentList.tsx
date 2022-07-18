import React, { useState } from 'react';

import { cards, comments } from '../../store';
import { CommentTypeProps } from '../../types';
import { InputGroup } from '../../ui/InputGroup';
import Comment from '../Comment/Comment';

const CommentList: React.FC<CommentListProps> = ({ cardId }) => {
  const [cardComments, setCardComments] = useState<CommentTypeProps[]>(
    comments.filter((item) => item.cardId === cardId)
  );

  const addComment = (value: string) => {
    if (value.trim()) {
      const newComment: CommentTypeProps = {
        cardId,
        comment: value,
        id: Date.now(),
      };

      comments.unshift(newComment);
      cards.forEach((item) => {
        if (item.id === cardId) {
          item.commentsIds.push(newComment.id);
        }
      });

      setCardComments((comments) => [newComment, ...comments]);

      localStorage.setItem('comments', JSON.stringify(comments));
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  };

  return (
    <div className="comments">
      <h3>Comments</h3>
      <InputGroup onClickBtn={addComment} btnType="success">
        Add comment
      </InputGroup>
      {cardComments.map((item) => (
        <Comment
          key={item.id.toString()}
          commentItem={item}
          setCardComments={setCardComments}
        />
      ))}
    </div>
  );
};

interface CommentListProps {
  cardId: number;
}

export default CommentList;
