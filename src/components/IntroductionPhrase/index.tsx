import styled from '@emotion/styled';
import Image from 'next/image';
import Channel from '@icons/Channel.png';
import Mail from '@icons/Mail.png';
import Robot from '@icons/Robot.png';

const IntroductionPhrase = () => {
  return (
    <Wrapper>
      <IntroductionPhraseItem>
        <IconWrapper>
          <div>
            <Image src={Mail} alt="알림톡" />
          </div>
        </IconWrapper>
        <TextWrapper>
          <Text>카카오 알림톡을 통해</Text>
          <TextFloor>
            <EmphasisText>저렴하고, 신뢰할 수 있는</EmphasisText>
            <Text>메시지 발송</Text>
          </TextFloor>
        </TextWrapper>
      </IntroductionPhraseItem>
      <IntroductionPhraseItem>
        <IconWrapper>
          <div>
            <Image src={Channel} alt="채널" />
          </div>
        </IconWrapper>
        <TextWrapper>
          <Text>카카오 채널을 통해</Text>
          <TextFloor>
            <EmphasisText>쉽고, 빠른</EmphasisText>
            <Text>온라인 판매채널 구축</Text>
          </TextFloor>
        </TextWrapper>
      </IntroductionPhraseItem>
      <IntroductionPhraseItem>
        <IconWrapper>
          <div>
            <Image src={Robot} alt="챗봇" />
          </div>
        </IconWrapper>
        <TextWrapper>
          <Text>카카오 챗봇을 통해</Text>
          <TextFloor>
            <EmphasisText>편리하고, 자동화된</EmphasisText>
            <Text>고객응대</Text>
          </TextFloor>
        </TextWrapper>
      </IntroductionPhraseItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 621px;
  height: 381px;

  @media screen and (max-width: 1600px) {
    width: 590px;
    height: 360px;
  }
`;

const IntroductionPhraseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103px;
  height: 103px;
  background-color: #fae100;
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 470px;
  height: 80px;

  @media screen and (max-width: 1600px) {
    width: 410px;
    height: 66px;
  }
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #333d4b;

  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const EmphasisText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 43px;

  color: #000000;

  margin-right: 10px;

  @media screen and (max-width: 1600px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const TextFloor = styled.div`
  display: flex;
  align-items: baseline;
`;

export default IntroductionPhrase;
