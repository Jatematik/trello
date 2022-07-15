export interface ColumnTypeProps {
  id: number;
  title: string;
  cardIds: number[];
}

export interface CardTypeProps {
  id: number;
  columnId: number;
  title: string;
  desc: string;
  commentsIds: number[];
}

export interface CommentTypeProps {
  id: number;
  cardId: number;
  comment: string;
}
