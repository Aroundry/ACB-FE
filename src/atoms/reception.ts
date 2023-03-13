import { atom } from 'recoil';

interface ReceptionDataTypes {
  id: number;
  name: string;
  number: string;
  address: string;
  receptionItem: string;
  date: string;
  request: string;
  status: string;
}

const receptionDataAtom = atom<ReceptionDataTypes[]>({
  key: 'receptionData',
  default: [],
});

const receptionDetailDataAtom = atom<ReceptionDataTypes>({
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
export type { ReceptionDataTypes };
