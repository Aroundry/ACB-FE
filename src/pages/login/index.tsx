import { LoginPageHeader } from '@components/Header';
import IntroductionPhrase from '@components/IntroductionPhrase';
import LoginForm from '@components/LoginForm';
import styled from '@emotion/styled';
import useAuth from 'src/hooks/useAuth';

export default function login() {
  useAuth(false);
  return (
    <>
      <LoginPageWrapper>
        <LoginPageHeader />
        <BodyWrapper>
          <LoginForm />
          <IntroductionPhrase />
        </BodyWrapper>
      </LoginPageWrapper>
      )
    </>
  );
}

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2f4f6;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 100vh;

  @media screen and (max-width: 1600px) {
    width: 1240px;
  }
`;
