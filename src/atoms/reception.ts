import { atom } from 'recoil';

interface receptionDataTypes {
  name: string;
  number: string;
  address: string;
  receptionItem: string;
  date: string;
  request: string;
  status: string;
}

const receptionDataAtom = atom<receptionDataTypes[]>({
  key: 'receptionData',
  default: [],
});

const receptionDetailDataAtom = atom<receptionDataTypes>({
  key: 'receptionDetailData',
  default: {
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

export { receptionDataAtom, receptionDetailDataAtom, receptionCompleteAtom };
