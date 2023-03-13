import styled from '@emotion/styled';

const CustomerReception = () => {
  return (
    <>
      <Title>접수</Title>
      <Body></Body>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 29px;

  text-align: center;

  color: #000099;

  background-color: #fff;
`;

const Body = styled.div`
  display: flex;

  width: 100%;
  min-height: calc(100vh - 80px);

  background-color: #f2f4f6;
`;

export default CustomerReception;
