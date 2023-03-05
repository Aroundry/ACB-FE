import styled from '@emotion/styled';
import Image from 'next/image';
import Search from '@icons/Search.png';
import Detail from '@icons/Detail.png';
import Delete from '@icons/Delete.png';
import ReceptionStatusTable from './ReceptionStatusTable';
import LeftArrow from '@icons/LeftArrow.png';
import RightArrow from '@icons/RightArrow.png';
import Check from '@icons/Check.png';
import useOpenModal from '@components/Modal/useOpenModal';
import Modal from '@components/Modal';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { receptionCompleteAtom } from '@atoms/reception';

const ReceptionStatus = () => {
  const {
    isOpenReceptionDetailModal,
    clickReceptionDetailModal,
    closeReceptionDetailModal,
    isOpenConfirmModal,
    clickConfirmModal,
    closeConfirmModal,
  } = useOpenModal();
  const receptionComplete = useRecoilValue(receptionCompleteAtom);
  const [isToastMessageVisible, setIsToastMessageVisible] = useState(false);

  useEffect(() => {
    if (receptionComplete === false) return;
    setIsToastMessageVisible(true);
    const timer = setTimeout(() => {
      setIsToastMessageVisible(false);
    }, 3000);
  }, [receptionComplete]);

  return (
    <Wrapper>
      <Title>접수현황</Title>
      <Floor>
        <SearchWrapper>
          <Image src={Search} alt="검색" />
          <SearchInput placeholder="검색"></SearchInput>
        </SearchWrapper>
        <DeleteAndDetailButtonWrapper>
          <DeleteButton onClick={clickConfirmModal}>
            <Image src={Delete} alt="삭제하기" />
            삭제하기
          </DeleteButton>
          <DetailButton onClick={clickReceptionDetailModal}>
            <Image src={Detail} alt="상세정보 보기" />
            상세정보 보기
          </DetailButton>
        </DeleteAndDetailButtonWrapper>
      </Floor>
      <ReceptionStatusTable />
      <PaginationWrapper>
        <PaginationArrow>
          <Image src={LeftArrow} alt="뒤" />
        </PaginationArrow>
        <PaginationNumber title="true">1</PaginationNumber>
        <PaginationNumber>2</PaginationNumber>
        <PaginationNumber>3</PaginationNumber>
        <PaginationNumber>4</PaginationNumber>
        <PaginationNumber>5</PaginationNumber>
        <PaginationArrow title="true">
          <Image src={RightArrow} alt="앞" />
        </PaginationArrow>
      </PaginationWrapper>
      <ReceptionCompleteButton>
        <Image src={Check} alt="체크" />
        접수완료
      </ReceptionCompleteButton>
      {isToastMessageVisible && (
        <ToastMessage>
          <Image src={Check} alt="체크" />
          접수가 완료되었습니다.
        </ToastMessage>
      )}
      {isOpenReceptionDetailModal && (
        <Modal
          closeModal={closeReceptionDetailModal}
          species="ReceptionDetail"
        />
      )}
      {isOpenConfirmModal && (
        <Modal closeModal={closeConfirmModal} species="Confirm" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1632px;
  height: calc(100vh - 128px);

  padding: 16px;

  background-color: #fff;
  border: 1px solid #d1d6d8;
  border-radius: 7px;
`;

const Title = styled.div`
  width: 83px;
  height: 29px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #4e5968;
  margin-bottom: 18px;
`;

const Floor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 531px;
  height: 48px;

  border: 1px solid #e5e8eb;
  box-shadow: 0px 0px 3px rgba(229, 232, 235, 0.25);
  border-radius: 7px;

  padding-left: 13px;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 18px 12px 12px;
  gap: 6px;

  width: 480px;
  height: 46px;
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #8b95a1;
  }

  :focus {
    outline: none;
  }
`;

const DeleteAndDetailButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 400px;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 12px 36px 12px 24px;
  gap: 12px;

  width: 171px;
  height: 48px;

  border: 1px solid #ff0000;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  cursor: pointer;

  color: #ff0000;
`;

const DetailButton = styled(DeleteButton)`
  width: 205px;

  border: 1px solid #8585ff;
  border-radius: 7px;

  color: #8585ff;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 278px;
  height: 32px;

  margin: 32px auto;
`;

const PaginationArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: ${(props) =>
    props.title === 'true' ? '#8585FF' : '#D1D6DB'};
`;

const PaginationNumber = styled(PaginationArrow)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: ${(props) => (props.title === 'true' ? '#fff' : '#333d4b')};
  background-color: ${(props) => (props.title === 'true' ? '#8585FF' : '#fff')};
  border-radius: ${(props) => (props.title === 'true' ? '50%' : 'none')};
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
  cursor: default;
  background: #d1d6db;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;

const ToastMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;

  position: absolute;
  width: 435px;
  height: 61px;
  bottom: 40px;

  background: #00a300;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  animation: toastAnimation 3s 1;

  @keyframes toastAnimation {
    0% {
      opacity: 0;
    }
    37% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default ReceptionStatus;
