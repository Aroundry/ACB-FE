import { LoginPageHeader } from '@components/Header';
import QNA from '@components/QNA';
import styled from '@emotion/styled';

export default function qna() {
  return (
    <>
      <LoginPageHeader />
      <NoticeContainer>
        <NoticeTitleWrapper>Q&A</NoticeTitleWrapper>
        <NoticeTextWrapper>궁금한 점에 대해 답변드립니다.</NoticeTextWrapper>
      </NoticeContainer>

      <QNA />
    </>
  );
}

const NoticeContainer = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
  padding-top: 80px;
  height: 250px;
  background-color: #00009983;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoticeTitleWrapper = styled.div`
  width: 70%;
  color: #fff;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 140%;
`;

const NoticeTextWrapper = styled.div`
  width: 70%;
  color: #fff;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 140%;
`;
