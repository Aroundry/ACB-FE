import { userState } from '@atoms/userState';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';

const useAuth = (withAuth = true) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(() => {
    console.log(cookies['accessToken']);
    setUserInfo({ accessToken: cookies['accessToken'] });
  }, []);

  useEffect(() => {
    if (withAuth && !userInfo.accessToken) {
      router.push('/login');
    }
    if (!withAuth && userInfo.accessToken) {
      console.log('2번');
      router.push('/');
    }
  });
  return userInfo;
};

export default useAuth;
