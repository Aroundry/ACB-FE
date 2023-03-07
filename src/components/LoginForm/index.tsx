import styled from '@emotion/styled';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <LoginFormTitle>어라운드리 카카오톡 채널 서비스 로그인</LoginFormTitle>
      <LoginFormBox>
        <LoginFormLabel>아이디</LoginFormLabel>
        <LoginFormInput placeholder="아이디 입력"></LoginFormInput>
        <LoginFormLabel>비밀번호</LoginFormLabel>
        <LoginFormInput
          type="password"
          placeholder="비밀번호 입력"
        ></LoginFormInput>
      </LoginFormBox>
      <AutoLoginWrapper>
        <AutoLoginButton></AutoLoginButton>
        <AutoLoginText>자동로그인</AutoLoginText>
      </AutoLoginWrapper>
      <Link href={'/'}>
        <LoginButton>로그인</LoginButton>
      </Link>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  box-sizing: border-box;
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

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 516px;
  height: 214px;

  margin-bottom: 27px;
`;

const LoginFormLabel = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #4e5968;

  margin-bottom: 5px;
`;

const LoginFormInput = styled.input`
  box-sizing: border-box;
  width: 516px;
  height: 61px;
  border: 1px solid #e5e8eb;
  box-shadow: 0px 0px 3px rgba(229, 232, 235, 0.25);
  border-radius: 7px;
  padding: 16px 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  margin-bottom: 24px;

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #8b95a1;
  }
`;

const AutoLoginWrapper = styled.div`
  width: 154px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 35px;
  margin-bottom: 35px;
`;

const AutoLoginButton = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #8b95a1;
  border-radius: 50%;
`;

const AutoLoginText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #4e5968;
`;

const LoginButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;

  width: 516px;
  height: 75px;

  background: #0000cd;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  color: #fff;
`;

export default LoginForm;
