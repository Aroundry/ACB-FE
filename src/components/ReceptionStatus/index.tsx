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
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  deleteObjectFromListAtom,
  receptionCompleteAtom,
  receptionDataAtom,
  receptionDetailDataAtom,
} from '@atoms/reception';
import ReceptionData from 'src/types/ReceptionData';
import useGetReception from '@hooks/queries/useGetReception';
import { userState } from '@atoms/userState';

const ReceptionStatus = () => {
  const {
    isOpenReceptionDetailModal,
    clickReceptionDetailModal,
    closeReceptionDetailModal,
    isOpenConfirmModal,
    clickConfirmModal,
    closeConfirmModal,
  } = useOpenModal();
  const [receptionData, setReceptionData] = useRecoilState(receptionDataAtom);
  const [receptionComplete, setReceptionComplete] = useRecoilState(
    receptionCompleteAtom
  );
  const [deleteObjectFromList, setDeleteObjectFromList] = useRecoilState(
    deleteObjectFromListAtom
  );
  const receptionDetailData = useRecoilValue(receptionDetailDataAtom);
  const [isToastMessageVisible, setIsToastMessageVisible] = useState(false);
  const [SearchText, setSearchText] = useState('');
  const [searchData, setSearchData]: any = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleOnEnter = (name: string) => {
    if (name === '') {
      setDeleteObjectFromList(false);
      setSearchData(undefined);
      return;
    }
    setSearchData(
      receptionData.filter(
        (it) =>
          it.name.includes(name) ||
          it.address.includes(name) ||
          it.number.includes(name)
      )
    );
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnEnter(SearchText);
    }
  };
  const tableDataList = (datalist: ReceptionData[]) => {
    if (searchData) {
      return searchData?.slice(offset, offset + limit);
    } else return datalist?.slice(offset, offset + limit);
  };

  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset
  const [isLeftArrowAvailable, setIsLeftArrowAvailable] = useState(''); // pagination의 활성화 여부 판단
  const [isRightArrowAvailable, setIsRightArrowAvailable] = useState('');

  let id: number = -1;

  const { data } = useGetReception();
  console.log('receptionData: ', receptionData);
  useEffect(() => {
    id = -1;
    let dummy = data?.map((it) => {
      id++;
      return {
        name: it.name,
        number: it.phone_number,
        address: it.address,
        receptionItem: it.laundry_item,
        date: it.collection_date,
        request: it.request_memo,
        status: it.status,
        receptionId: it.reception_id,
        id: id,
      };
    });
    setReceptionData(dummy);
  }, [data]);

  useEffect(() => {
    setPage(1);
    setIsLeftArrowAvailable('false');
    if (searchData) {
      if (searchData.length < 10) {
        setIsRightArrowAvailable('false');
      } else {
        setIsRightArrowAvailable('true');
      }
    }
  }, [searchData]);

  useEffect(() => {
    if (receptionData?.length > 10) setIsRightArrowAvailable('true');
    else setIsRightArrowAvailable('false');
  }, [receptionData]);

  useEffect(() => {
    if (receptionComplete === false) return;
    setIsToastMessageVisible(true);
    setTimeout(() => {
      setIsToastMessageVisible(false);
    }, 3000);
  }, [receptionComplete]);

  useEffect(() => {
    id = -1;
    if (receptionComplete === true || deleteObjectFromList === true) {
      setReceptionData(
        receptionData
          .filter(
            (it) =>
              it.number != receptionDetailData.number ||
              it.receptionItem != receptionDetailData.receptionItem ||
              it.name != receptionDetailData.name
          )
          .map((it) => {
            id++;
            return { ...it, id: id };
          })
      );
      setReceptionComplete(false);
      setDeleteObjectFromList(false);
    }
  }, [receptionComplete, deleteObjectFromList]);

  if (!receptionData) return <div>로딩중...</div>;
  return (
    <Wrapper>
      <Title>접수현황</Title>
      <Floor>
        <SearchWrapper>
          <Image src={Search} alt="검색" />
          <SearchInput
            placeholder="검색"
            onChange={onChange}
            onKeyDown={handleOnKeyPress}
          ></SearchInput>
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
      <ReceptionStatusTable tableData={tableDataList(receptionData)} />
      <PaginationWrapper>
        <PaginationArrow
          title={isLeftArrowAvailable}
          onClick={() => {
            if (page < 2) return;
            if (page === 2) setIsLeftArrowAvailable('false');
            setIsRightArrowAvailable('true');
            setPage(page - 1);
          }}
        >
          <Image src={LeftArrow} alt="뒤" />
        </PaginationArrow>
        <PaginationArrow
          title={isRightArrowAvailable}
          onClick={() => {
            if (searchData) {
              if (searchData[page * 10] === undefined) return;
              if (searchData[(page + 1) * 10] === undefined)
                setIsRightArrowAvailable('false');
              setIsLeftArrowAvailable('true');
              setPage(page + 1);
            } else {
              if (receptionData[page * 10] === undefined) return;
              if (receptionData[(page + 1) * 10] === undefined)
                setIsRightArrowAvailable('false');
              setIsLeftArrowAvailable('true');
              setPage(page + 1);
            }
          }}
        >
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
  min-height: 800px;

  padding: 16px;

  background-color: #fff;
  border: 1px solid #d1d6d8;
  border-radius: 7px;

  @media screen and (max-width: 1600px) {
    width: 1372px;
    min-height: 600px;

    padding: 12px;
  }
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

  @media screen and (max-width: 1600px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 0px;
  }
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

  border: 1px solid #e5e8eb;
  box-shadow: 0px 0px 3px rgba(229, 232, 235, 0.25);
  border-radius: 7px;

  padding-left: 13px;
  @media screen and (max-width: 1600px) {
    width: 244px;
  }
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

  @media screen and (max-width: 1600px) {
    width: 200px;
    height: 33px;

    font-size: 16px;
    line-height: 19px;

    ::placeholder {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

const DeleteAndDetailButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 390px;

  @media screen and (max-width: 1600px) {
    width: 300px;
  }
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

  @media screen and (max-width: 1600px) {
    width: 128px;
    height: 35px;

    font-size: 16px;
    line-height: 19px;
  }
`;

const DetailButton = styled(DeleteButton)`
  width: 205px;

  border: 1px solid #8585ff;
  border-radius: 7px;

  color: #8585ff;

  @media screen and (max-width: 1600px) {
    width: 158px;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 210px;
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
  cursor: ${(props) => (props.title === 'true' ? 'pointer' : 'default')};
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

  @media screen and (max-width: 1600px) {
    width: 168px;
    height: 48px;

    font-size: 20px;
    line-height: 24px;
  }
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
