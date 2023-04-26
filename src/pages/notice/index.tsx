import { LoginPageHeader } from '@components/Header';
import styled from '@emotion/styled';
import NoticeList from '@components/NoticeList';

export default function notice() {
  return (
    <>
      <LoginPageHeader />
      <NoticeContainer>
        <NoticeTitleWrapper>공지사항</NoticeTitleWrapper>
        <NoticeTextWrapper>
          AROUDNDRY의 업데이트 정보 등 다양한 소식을 알려드립니다.
        </NoticeTextWrapper>
      </NoticeContainer>

      <NoticeList />
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
