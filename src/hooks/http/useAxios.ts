import { userState } from '@atoms/userState';
import { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Axios from 'axios';

const useAxios = () => {
  const userInfo = useRecoilValue(userState);
  const { current: axios } = useRef(
    Axios.create({
      withCredentials: true,
      baseURL: '//localhost:8080',
    })
  );

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      userInfo.accessToken || ''
    }`;
  }, [userInfo]);

  return { axios };
};

export default useAxios;
