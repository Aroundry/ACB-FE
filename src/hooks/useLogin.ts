import { loggedInState, userState } from '@atoms/userState';
import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import UserInfo from '#types/UserInfo';
import { useCookies } from 'react-cookie';

const useLogin = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [cookies, setCookie, removeCookie] = useCookies();
  const login = useCallback((userInfo: UserInfo) => {
    setUserInfo(userInfo);
    setLoggedIn(true);
    setCookie('accessToken', userInfo.accessToken);
  }, []);
  return login;
};

export default useLogin;
