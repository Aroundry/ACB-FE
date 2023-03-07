import styled from '@emotion/styled';
import Image from 'next/image';
import Logout from '@icons/Logout.png';
import Link from 'next/link';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationItem>접수현황</NavigationItem>
      <Link href={'/Login'}>
        <LogoutButton>
          <Image src={Logout} alt="로그아웃" />
          <LogoutButtonText>로그아웃</LogoutButtonText>
        </LogoutButton>
      </Link>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 100vh;

  bottom: auto;
  background-color: #fff;
`;

const NavigationItem = styled.div`
  box-sizing: border-box;

  padding: 16px 24px;

  margin-top: 80px;
  width: 240px;
  height: 61px;

  border-left: 10px solid #0000cd;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #333d4b;
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
`;

export default Navigation;
