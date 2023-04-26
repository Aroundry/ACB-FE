import { qnaListAtom } from '@atoms/qnaList';
import { LoginPageHeader } from '@components/Header';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const qnaList = useRecoilValue(qnaListAtom);
  const onClickAnswer = () => {
    router.push(`/qna/answer/${id}`);
  };
  const getQnaDetail = () => {
    return qnaList.filter((it) => it.id === id);
  };
  useEffect(() => {
    setQnaDetail(getQnaDetail());
    console.log(qnaDetail);
  }, []);
  const [qnaDetail, setQnaDetail] = useState(qnaList);
  return (
    <>
      <LoginPageHeader />
      <Container>
        <Wrapper>
          <Title>{qnaDetail[0].title}</Title>
          <Date>{qnaDetail[0].date}</Date>
          <Text>{qnaDetail[0].text}</Text>
        </Wrapper>
      </Container>
      <Button onClick={onClickAnswer}>답변하기</Button>
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

const Button = styled.div`
  cursor: pointer;

  position: absolute;
  right: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  border-radius: 5px;
  width: 160px;
  height: 60px;
  background-color: #4727ff;
  color: #fff;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
`;

export default detail;
