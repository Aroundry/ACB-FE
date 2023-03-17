import styled from '@emotion/styled';
import Check from '@icons/Check.png';
import Image from 'next/image';

const ReceptionForm = () => {
  return (
    <Wrapper>
      <Title>세탁 접수</Title>
      <FormBox>
        <FormLabel>이름</FormLabel>
        <FormInput placeholder="이름 입력"></FormInput>
        <FormLabel>전화번호</FormLabel>
        <FormInput type="number" placeholder="전화번호 입력"></FormInput>
        <FormLabel>주소</FormLabel>
        <FormInput placeholder="주소 입력"></FormInput>
        <FormLabel>접수품목</FormLabel>
        <FormInput placeholder="접수품목 입력"></FormInput>
        <FormLabel>수거요청 시간 및 날짜</FormLabel>
        <FormInput
          type="datetime-local"
          placeholder="수거요청 시간 및 날짜 입력"
        ></FormInput>
        <FormLabel>요청사항</FormLabel>
        <FormInput placeholder="요청사항 입력"></FormInput>
        <ReceptionCompleteButton>
          <Image src={Check} alt="체크" />
          접수하기
        </ReceptionCompleteButton>
      </FormBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 5vw;

  width: 100vw;

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
  width: 90vw;
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

  margin-bottom: 24px;

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;

    color: #8b95a1;
  }
`;

const ReceptionCompleteButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 20px;

  margin-top: 16px;
  width: 201px;
  height: 61px;

  border: none;
  cursor: default;
  background: #d1d6db;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  margin-bottom: 80px;
`;

export default ReceptionForm;
