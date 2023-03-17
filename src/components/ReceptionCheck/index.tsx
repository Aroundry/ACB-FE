import styled from '@emotion/styled';
import Check from '@icons/Check.png';
import Image from 'next/image';

const ReceptionCheck = () => {
  return (
    <Wrapper>
      <Title>접수 조회</Title>
      <FormBox>
        <FormLabel>전화번호</FormLabel>
        <FormInput placeholder="전화번호 입력"></FormInput>
      </FormBox>
      <TableWrapper></TableWrapper>
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

const TableWrapper = styled.div`
  width: 90vw;
  height: 30vh;

  border-radius: 7px;
  background-color: #928f8f50;
`;

export default ReceptionCheck;
