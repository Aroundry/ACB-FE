import styled from '@emotion/styled';
import useInput from '@hooks/useInput';
import { useCallback, useState } from 'react';
import { phoneNumberValidator } from 'src/utils/validationUtils';
import ReceptionCheckTable from './ReceptionCheckTable';

const ReceptionCheck = () => {
  const [phoneNumber, onChangePhoneNumber, phoneNumberError] =
    useInput(phoneNumberValidator);
  const [show, setShow] = useState(false);
  const onCilckCheck = () => {
    setShow(true);
  };
  const onChangeShow = useCallback(() => {
    setShow(false);
  }, [show]);

  return (
    <Wrapper>
      <Title>접수 조회</Title>
      <Container>
        <FormBox>
          <FormLabel>전화번호</FormLabel>
          <FormInput
            placeholder="전화번호 입력"
            onChange={(e) => {
              onChangeShow();
              onChangePhoneNumber(e);
            }}
          ></FormInput>
        </FormBox>
        <CheckButton onClick={onCilckCheck}>조회</CheckButton>
      </Container>
      {show && <ReceptionCheckTable phoneNumber={phoneNumber} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 5vw;

  width: 100vw;
  height: 100vh;

  background: #ffffff;
  border-radius: 7px;
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #333d4b;

  margin-bottom: 24px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;

  gap: 22px;

  margin-bottom: 30px;
`;

const FormBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
  color: #4e5968;

  margin-bottom: 5px;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  height: 50px;
  border: 1px solid #e5e8eb;
  box-shadow: 0px 0px 3px rgba(229, 232, 235, 0.25);
  border-radius: 7px;
  padding: 16px 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;

    color: #8b95a1;
  }
`;

const CheckButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 10vw;
  min-width: 100px;
  height: 50px;

  border: none;
  cursor: default;
  background: #6d6dff;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-top: 33px;
  color: #ffffff;

  cursor: pointer;
`;

export default ReceptionCheck;
