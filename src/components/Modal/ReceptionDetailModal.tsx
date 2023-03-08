import {
  receptionDetailDataAtom,
  receptionCompleteAtom,
} from '@atoms/reception';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Image from 'next/image';
import Check from '@icons/Check.png';
import Copy from '@icons/Copy.png';
import { useState } from 'react';

export interface Props {
  closeModal: () => void;
}

const ReceptionDetailModal = ({ closeModal }: Props) => {
  const receptionDetailData = useRecoilValue(receptionDetailDataAtom);
  const setReceptionComplete = useSetRecoilState(receptionCompleteAtom);
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopySuccess(true);
    } catch (e) {
      setIsCopySuccess(false);
    }
  };

  return (
    <Wrapper>
      <Title>상세정보</Title>
      <PropsTitle>이름</PropsTitle>
      <PropsBoldText
        onClick={() => {
          handleCopyClipBoard(receptionDetailData.name);
          console.log(isCopySuccess);
        }}
      >
        {receptionDetailData.name}
        <Image src={Copy} alt="복사" />
      </PropsBoldText>
      <PropsTitle>전화번호</PropsTitle>
      <PropsNomalText
        onClick={() => {
          handleCopyClipBoard(receptionDetailData.number);
          console.log(isCopySuccess);
        }}
      >
        {receptionDetailData.number}
        <Image src={Copy} alt="복사" />
      </PropsNomalText>
      <PropsTitle>주소</PropsTitle>
      <PropsNomalText
        onClick={() => {
          handleCopyClipBoard(receptionDetailData.address);
        }}
      >
        {receptionDetailData.address}
        <Image src={Copy} alt="복사" />
      </PropsNomalText>
      <PropsTitle>접수품목</PropsTitle>
      <PropsNomalText
        onClick={() => {
          handleCopyClipBoard(receptionDetailData.receptionItem);
        }}
      >
        {receptionDetailData.receptionItem.split(',', 100).map((it) => (
          <>
            {it}
            <br />
          </>
        ))}
        <Image src={Copy} alt="복사" />
      </PropsNomalText>
      <PropsTitle>수거요청 날짜 및 시간</PropsTitle>
      <PropsBoldText
        onClick={() => {
          handleCopyClipBoard(receptionDetailData.date);
        }}
      >
        {receptionDetailData.date}
        <Image src={Copy} alt="복사" />
      </PropsBoldText>
      <PropsTitle>요청사항</PropsTitle>
      <PropsNomalText
        onClick={() => {
          handleCopyClipBoard(receptionDetailData.request);
        }}
      >
        {receptionDetailData.request}
        {!receptionDetailData.request && <div></div>}
        <Image src={Copy} alt="복사" />
      </PropsNomalText>
      <ReceptionCompleteButton
        onClick={() => {
          closeModal();
          setReceptionComplete(true);
        }}
      >
        <Image src={Check} alt="체크" />
        접수완료
      </ReceptionCompleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 4;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;

  width: 448px;
  height: 100vh;
`;

const Title = styled.div`
  width: 100%;

  padding: 19px 16px;
  margin-bottom: 16px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #000000;

  border-bottom: 1px solid #e5e8eb;
`;

const PropsTitle = styled.div`
  margin: 16px 24px 8px 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #8b95a1;
`;

const PropsBoldText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 24px 16px 24px;
  padding: 12px 18px;

  background: #f9fafb;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
  cursor: pointer;
`;

const PropsNomalText = styled(PropsBoldText)`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  cursor: pointer;
  color: #333d4b;
`;

const ReceptionCompleteButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 20px;

  position: absolute;
  width: 201px;
  height: 61px;
  right: 40px;
  bottom: 40px;

  border: none;
  cursor: pointer;
  background: #0000cd;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;

export default ReceptionDetailModal;
