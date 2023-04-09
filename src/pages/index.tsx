import { ReceptionPageHeader } from '@components/Header';
import Navigation from '@components/Navigation';
import ReceptionStatus from '@components/ReceptionStatus';
import styled from '@emotion/styled';
import useAuth from 'src/hooks/useAuth';

export default function Home() {
  useAuth();

  return (
    <>
      <ReceptionPageWrapper>
        <ReceptionPageHeader />
        <Navigation />
        <BodyWrapper>
          <ReceptionStatus />
        </BodyWrapper>
      </ReceptionPageWrapper>
      )
    </>
  );
}

const ReceptionPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #f2f4f6;

  overflow: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  box-sizing: border-box;
  margin: 103px 24px 24px 24px;
`;
