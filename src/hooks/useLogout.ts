import { loggedInState, userState } from '@atoms/userState';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const useLogout = () => {
  const resetUser = useResetRecoilState(userState);
  const setLoggedIn = useSetRecoilState(loggedInState);
  const [cookies, setCookie, removeCookie] = useCookies();
  const logout = useCallback(() => {
    resetUser();
    setLoggedIn(false);
    removeCookie('refreshToken');
    removeCookie('accessToken');
  }, []);
  return logout;
};

export default useLogout;
