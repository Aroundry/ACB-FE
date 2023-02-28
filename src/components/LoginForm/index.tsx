import styled from '@emotion/styled';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LoginFormTitle>어라운드리 카카오톡 채널 서비스 로그인</LoginFormTitle>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px;

  width: 612px;
  height: 539px;

  background: #ffffff;
  border-radius: 7px;
`;

const LoginFormTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #333d4b;

  margin-bottom: 24px;
`;

const LoginFormBox = styled.div``;

export default LoginForm;
