import { ColumnTypeProps, CardTypeProps, CommentTypeProps } from '../types';

const storeColumns = localStorage.getItem('columns') || '';
const storeCards = localStorage.getItem('cards') || '';
const storeComments = localStorage.getItem('comments') || '';

export const columns: ColumnTypeProps[] = storeColumns
  ? JSON.parse(storeColumns)
  : [
      {
        id: 1,
        title: 'TODO',
        cardIds: [],
      },
      {
        id: 2,
        title: 'In Progress',
        cardIds: [],
      },
      {
        id: 3,
        title: 'Testing',
        cardIds: [],
      },
      {
        id: 4,
        title: 'Done',
        cardIds: [],
      },
    ];

export const cards: CardTypeProps[] = storeCards ? JSON.parse(storeCards) : [];

export const comments: CommentTypeProps[] = storeComments
  ? JSON.parse(storeComments)
  : [];
