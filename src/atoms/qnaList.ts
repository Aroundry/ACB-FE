import { atom } from 'recoil';
import QnaList from '#types/QnaList';

export const qnaListAtom = atom<QnaList[]>({
  key: 'qnaList',
  default: [],
});

export const qnaListDetailAtom = atom<QnaList>({
  key: 'qnaListDetail',
  default: {
    title: '',
    text: '',
    date: '',
    id: '',
  },
});
