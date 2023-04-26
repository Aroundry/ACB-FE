import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export const LoginPageHeader = () => {
  const router = useRouter();
  const onClickIntroduction = () => {
    router.push('/introduction');
  };
  const onClickLogin = () => {
    router.push('/login');
  };
  const onClickQnA = () => {
    router.push('/qna');
  };
  const onClickNotice = () => {
    router.push('/notice');
  };

  return (
    <LoginHeaderWrapper>
      <PageTitle onClick={onClickLogin}>AROUNDRY</PageTitle>
      <LoginPageLinkMenuWrapper>
        <PageLinkMenu onClick={onClickIntroduction}>소개</PageLinkMenu>
        <PageLinkMenu onClick={onClickQnA}>Q&A</PageLinkMenu>
        <PageLinkMenu onClick={onClickNotice}>공지사항</PageLinkMenu>
      </LoginPageLinkMenuWrapper>
    </LoginHeaderWrapper>
  );
};

export const ReceptionPageHeader = () => {
  return (
    <ReceptionHeaderWrapper>
      <PageTitle>AROUNDRY</PageTitle>
      <ReceptionPageLinkMenuWrapper>
        <PageLinkMenu>접수조회</PageLinkMenu>
        <PageLinkMenu>알림톡</PageLinkMenu>
        <PageLinkMenu>친구톡</PageLinkMenu>
        <PageLinkMenu>문자</PageLinkMenu>
      </ReceptionPageLinkMenuWrapper>
    </ReceptionHeaderWrapper>
  );
};

export const IntroductionPageHeader = () => {
  const router = useRouter();
  const onClickLogin = () => {
    router.push('/login');
  };
  return (
    <IntroductionHeaderWrapper>
      <IntroductionTitle onClick={onClickLogin}>AROUNDRY</IntroductionTitle>
    </IntroductionHeaderWrapper>
  );
};

const LoginHeaderWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: #fff;
  width: 100vw;
  height: 80px;
`;

const ReceptionHeaderWrapper = styled(LoginHeaderWrapper)`
  border-bottom: 1px solid #8b95a1;
`;

const IntroductionHeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 48px;
  gap: 80px;

  position: absolute;
  width: 1920px;
  height: 139px;
  left: 0px;
  top: 0px;
`;

const IntroductionTitle = styled.div`
  cursor: pointer;
  width: 204px;
  height: 43px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 43px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 80px;
`;

const IntroductionText = styled.div`
  width: 63px;
  height: 29px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;

const Text = styled.div`
  padding: 21px 31px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  @media screen and (max-width: 1600px) {
    font-size: 26px;
  }
`;

const PageTitle = styled(Text)`
  cursor: pointer;
  color: #0000cd;
`;

const LoginPageLinkMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 720px;
`;

const ReceptionPageLinkMenuWrapper = styled(LoginPageLinkMenuWrapper)`
  width: 960px;
`;

const PageLinkMenu = styled(Text)`
  color: #333d4b;
  cursor: pointer;
`;
