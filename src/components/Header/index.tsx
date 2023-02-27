import styled from '@emotion/styled';

export const LoginPageHeader = () => {
  return (
    <HeaderWrapper>
      <PageTitle>AROUNDRY</PageTitle>
      <PageLinkMenuWrapper>
        <PageLinkMenu>소개</PageLinkMenu>
        <PageLinkMenu>Q&A</PageLinkMenu>
        <PageLinkMenu>1:1문의</PageLinkMenu>
      </PageLinkMenuWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 1920px;
  height: 80px;
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

const PageLinkMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 700px;
`;

const PageLinkMenu = styled(Text)`
  color: #333d4b;
`;
