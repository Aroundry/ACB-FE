import { LoginPageHeader } from '@components/Header';
import IntroductionPhrase from '@components/IntroductionPhrase';
import LoginForm from '@components/LoginForm';
import styled from '@emotion/styled';

export default function Login() {
  return (
    <>
      <LoginPageWrapper>
        <LoginPageHeader />
        <BodyWrapper>
          <LoginForm />
          <IntroductionPhrase />
        </BodyWrapper>
      </LoginPageWrapper>
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
`;
