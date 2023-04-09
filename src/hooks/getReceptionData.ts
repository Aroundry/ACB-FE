import { receptionDataAtom } from '@atoms/reception';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import ReceptionData from 'src/types/ReceptionData';

const getReceptionData = () => {
  const setReceptionData = useSetRecoilState(receptionDataAtom);
  const ReceptionData = useCallback((receptionData: ReceptionData[]) => {
    setReceptionData(receptionData);
  }, []);
  return ReceptionData;
};

export default getReceptionData;
