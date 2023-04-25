import { atom } from 'recoil';
import ReceptionData from 'src/types/ReceptionData';

const receptionDataAtom = atom<ReceptionData[]>({
  key: 'receptionData',
  default: [],
});

const receptionDetailDataAtom = atom<ReceptionData>({
  key: 'receptionDetailData',
  default: {
    id: -1,
    name: '',
    number: '',
    address: '',
    receptionItem: '',
    date: '',
    request: '',
    status: '',
    receptionId: '',
  },
});

const receptionCompleteAtom = atom<boolean>({
  key: 'receptionComplete',
  default: false,
});

const deleteObjectFromListAtom = atom<boolean>({
  key: 'deleteObjectFromList',
  default: false,
});

export {
  receptionDataAtom,
  receptionDetailDataAtom,
  receptionCompleteAtom,
  deleteObjectFromListAtom,
};
