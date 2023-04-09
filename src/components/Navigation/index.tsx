import styled from '@emotion/styled';
import Image from 'next/image';
import Logout from '@icons/Logout.png';
import { useRouter } from 'next/router';
import useHttpGet from 'src/hooks/http/useHttpGet';
import useLogout from 'src/hooks/useLogout';

const Navigation = () => {
  const router = useRouter();
  const { get } = useHttpGet();
  const logout = useLogout();
  const onClickLogout = async () => {
    try {
      await get('/auth/logout');
      logout();
      router.replace('/login');
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <NavigationWrapper>
      <NavigationItem>접수현황</NavigationItem>
      <LogoutButton onClick={onClickLogout}>
        <Image src={Logout} alt="로그아웃" />
        <LogoutButtonText>로그아웃</LogoutButtonText>
      </LogoutButton>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 100vh;
  min-height: 945px;

  bottom: auto;
  background-color: #fff;

  @media screen and (max-width: 1600px) {
    width: 180px;
    min-height: 790px;
  }
`;

const NavigationItem = styled.div`
  box-sizing: border-box;

  padding: 16px 24px;

  margin-top: 80px;
  width: 240px;

  border-left: 10px solid #0000cd;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #333d4b;

  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const LogoutButton = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;

  width: 208px;
  height: 48px;

  margin: 16px;
  padding: 12px 36px;

  border: 1px solid #8585ff;

  cursor: pointer;

  @media screen and (max-width: 1600px) {
    width: 148px;
    height: 35px;

    padding: 12px 24px;
  }
`;

const LogoutButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #8585ff;

  @media screen and (max-width: 1600px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export default Navigation;
