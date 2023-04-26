import styled from '@emotion/styled';
import Rectangle from '@icons/Rectangle.png';
import SmartPhone from '@icons/SmartPhone.png';
import ReceptionPage from '@icons/ReceptionPage.png';
import Image from 'next/image';
import { IntroductionPageHeader } from '@components/Header';

const introduction = () => {
  return (
    <Container>
      <Background>
        <Image src={Rectangle} alt="d" />
      </Background>
      <IntroductionPageHeader />
      <MainCopyright>
        하루종일 걸려오는 문의전화
        <br />
        비싼 SMS 비용
      </MainCopyright>
      <SubCopyright>
        <Highlight>카카오 챗봇</Highlight>, <Highlight>알림톡</Highlight>으로
        <br />
        <YelloHighlight>온라인 접수</YelloHighlight>와{' '}
        <YelloHighlight>고객문의</YelloHighlight>를{' '}
        <YelloHighlight>자동</YelloHighlight>으로!
      </SubCopyright>
      <SmartPhoneWrapper>
        <Image src={SmartPhone} alt="s" />
      </SmartPhoneWrapper>
      <ReceptionPageWrapper>
        <Image src={ReceptionPage} alt="a" />
      </ReceptionPageWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  width: 1920px;
  height: 618px;
  left: 0px;
  top: 0px;

  z-index: -1;
`;

const MainCopyright = styled.div`
  position: absolute;
  width: 742px;
  height: 180px;
  left: 172px;
  top: 154px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 140%;

  color: #fae100;
`;

const SubCopyright = styled.div`
  position: absolute;
  width: 504px;
  height: 86px;
  left: 172px;
  top: 346px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 43px;

  color: #ffffff;
`;

const Highlight = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 43px;

  color: #ffffff;
`;

const YelloHighlight = styled(Highlight)`
  color: #fae100;
`;

const SmartPhoneWrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 321px;
  height: 777.78px;
  left: 950px;
  top: 170px;
`;

const ReceptionPageWrapper = styled.div`
  position: absolute;
  width: 906px;
  height: 579px;
  top: 160px;
  left: 1020px;
`;

const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 64px;
  gap: 10px;

  position: absolute;
  width: 503px;
  height: 91px;
  left: 172px;
  top: 668px;

  background: #fae100;
  border-radius: 7px;
`;

const Text = styled.div`
  width: 164px;
  height: 43px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
`;

export default introduction;
