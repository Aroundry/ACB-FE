import styled from '@emotion/styled';

export const LoginPageHeader = () => {
  return (
    <LoginHeaderWrapper>
      <PageTitle>AROUNDRY</PageTitle>
      <LoginPageLinkMenuWrapper>
        <PageLinkMenu>소개</PageLinkMenu>
        <PageLinkMenu>Q&A</PageLinkMenu>
        <PageLinkMenu>1:1문의</PageLinkMenu>
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

const LoginHeaderWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: #fff;
  width: 1920px;
  height: 80px;
`;

const ReceptionHeaderWrapper = styled(LoginHeaderWrapper)`
  border-bottom: 1px solid #8b95a1;
`;

const Text = styled.div`
  padding: 21px 31px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

const PageTitle = styled(Text)`
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
`;
