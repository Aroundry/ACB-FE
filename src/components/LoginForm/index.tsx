import styled from '@emotion/styled';
import useHttpPost from 'src/hooks/http/useHttpPost';
import useInput from 'src/hooks/useInput';
import useLogin from 'src/hooks/useLogin';
import { idValidator, passwordValidator } from 'src/utils/validationUtils';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();
  const [userId, onChangeUserId, userIdError] = useInput(idValidator);
  const [password, onChangePassword, passwordError] =
    useInput(passwordValidator);
  const { post } = useHttpPost();
  const login = useLogin();

  const checkFormValidation = () => {
    return userId && password;
  };

  const onSubmitLogin = async (event: any) => {
    event.preventDefault();
    if (!checkFormValidation()) return;
    try {
      const response: any = await post('/auth/signin', { userId, password });
      login(response.data);
      console.log(response.data);
      router.push('/');
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <LoginFormWrapper>
      <LoginFormTitle>어라운드리 카카오톡 채널 서비스 로그인</LoginFormTitle>
      <LoginFormBox>
        <LoginFormLabel>아이디</LoginFormLabel>
        <LoginFormInput
          placeholder="아이디 입력"
          type="text"
          onChange={onChangeUserId}
        ></LoginFormInput>
        <LoginFormLabel>비밀번호</LoginFormLabel>
        <LoginFormInput
          type="password"
          placeholder="비밀번호 입력"
          onChange={onChangePassword}
        ></LoginFormInput>
      </LoginFormBox>
      <LoginButton onClick={onSubmitLogin}>로그인</LoginButton>
      {/* <AutoLoginWrapper>
        <AutoLoginButton></AutoLoginButton>
        <AutoLoginText>자동로그인</AutoLoginText>
      </AutoLoginWrapper> */}
      {/* <Link href={'/'}> */}
      {/* </Link> */}
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

  @media screen and (max-width: 1600px) {
    width: 503px;
    height: 402px;

    padding: 36px;
  }
`;

const LoginFormTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #333d4b;

  margin-bottom: 24px;

  @media screen and (max-width: 1600px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 436px;
  height: 214px;

  margin-bottom: 27px;

  @media screen and (max-width: 1600px) {
    margin-bottom: 0px;
  }
`;

const LoginFormLabel = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #4e5968;

  margin-bottom: 5px;
  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const LoginFormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
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

  @media screen and (max-width: 1600px) {
    height: 48px;

    font-size: 20px;
    line-height: 24px;

    margin-bottom: 16px;

    ::placeholder {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      color: #8b95a1;
    }
  }
`;

const AutoLoginWrapper = styled.div`
  width: 146px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 20px;
  margin-bottom: 35px;

  @media screen and (max-width: 1600px) {
    width: 120px;
    margin-bottom: 16px;
  }
`;

const AutoLoginButton = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid #8b95a1;
  border-radius: 50%;

  @media screen and (max-width: 1600px) {
    width: 16px;
    height: 16px;
    border: 2px solid #8b95a1;
  }
`;

const AutoLoginText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #4e5968;

  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const LoginButton = styled.button`
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

  @media screen and (max-width: 1600px) {
    width: 436px;
    height: 53px;
    font-size: 24px;
    line-height: 29px;
  }

  color: #fff;
`;

export default LoginForm;
