import { useRef } from 'react';
import Axios from 'axios';

const useReceptionCheckAxios = () => {
  const { current: axios } = useRef(
    Axios.create({
      withCredentials: true,
      baseURL: '//localhost:8080',
    })
  );

  return { axios };
};

export default useReceptionCheckAxios;
