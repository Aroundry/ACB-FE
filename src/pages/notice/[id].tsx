import { LoginPageHeader } from '@components/Header';
import styled from '@emotion/styled';

const noticeDetail = () => {
  return (
    <>
      <LoginPageHeader />
      <Container>
        <Wrapper>
          <Title>AROUNDRY 서비스 안내</Title>
          <Date>2023.04.25 | 서비스</Date>
          <Text>
            안녕하세요,{' '}
            <span style={{ color: '#2929d1', fontWeight: 'bold' }}>
              AROUNDRY
            </span>{' '}
            입니다.
            <br />
            <br />
            AROUNDRY가 2023년 4월 25일(목)에 서비스를 시작했습니다.
            <br />
            많은 관심 부탁드립니다.
          </Text>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 210px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
`;

const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 43px;
`;

const Date = styled.div`
  margin-top: 32px;
  height: 80px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 43px;
  color: #4a4d52;

  border-bottom: 1px solid #4a4d5242;
`;

const Text = styled.div`
  margin-top: 32px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 35px;
  color: #4a4d52;
`;

export default noticeDetail;
