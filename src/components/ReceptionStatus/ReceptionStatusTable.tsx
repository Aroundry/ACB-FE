import styled from '@emotion/styled';
import {
  receptionDataAtom,
  receptionDetailDataAtom,
  receptionCompleteAtom,
  deleteObjectFromListAtom,
} from '@atoms/reception';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';

const ReceptionStatusTable = () => {
  const setReceptionData = useSetRecoilState(receptionDataAtom);
  const [receptionDetailData, setReceptionDetailData] = useRecoilState(
    receptionDetailDataAtom
  );
  const [receptionComplete, setReceptionComplete] = useRecoilState(
    receptionCompleteAtom
  );
  const [deleteObjectFromList, setDeleteObjectFromList] = useRecoilState(
    deleteObjectFromListAtom
  );
  const receptionData = useRecoilValue(receptionDataAtom);
  const [isClick, setIsClick] = useState('');
  const dummyDataList = [
    {
      name: '권상욱',
      number: '010-4641-1242',
      address: '세종대학교 학생회관 518호',
      receptionItem: '티셔츠 1개, 신발 4개, 코트 1개, 청바지 2개, 패딩 2개',
      date: '2022-02-08 오후 02시 30분',
      request:
        '코트에 얼룩이 있습니다. 드라이 부탁드립니다. 나머지는 세탁해주세요.',
      status: 'show',
    },
    {
      name: '권동석',
      number: '010-4722-3462',
      address: '세화빌딩 301호',
      receptionItem: '코트 1개, 신발 1개, 패딩 1개',
      date: '2022-02-07 오후 06시 30분',
      request: '',
      status: 'show',
    },
    {
      name: '윤현지',
      number: '010-2146-4136',
      address: '씨즈건대힐스 1102호',
      receptionItem: '정바지 1개',
      date: '2022-02-07 오후 01시 00분',
      request: '',
      status: 'show',
    },
  ];

  useEffect(() => {
    setReceptionData(dummyDataList);
  }, []);

  useEffect(() => {
    if (receptionComplete === true || deleteObjectFromList === true) {
      setReceptionData(
        receptionData.filter(
          (it) =>
            it.number != receptionDetailData.number &&
            it.receptionItem != receptionDetailData.receptionItem
        )
      );
      setReceptionComplete(false);
      setDeleteObjectFromList(false);
    }
  }, [receptionComplete, deleteObjectFromList]);

  return (
    <Wrapper>
      <TableHeader>
        <TableNameTitle></TableNameTitle>
        <TableNumberTitle>전화번호</TableNumberTitle>
        <TableAddressTitle>주소</TableAddressTitle>
        <TableReceptionItemTitle>접수품목</TableReceptionItemTitle>
        <TableDateTitle>수거요청 날짜 및 시간</TableDateTitle>
        <TableRequestTitle>요청사항</TableRequestTitle>
      </TableHeader>
      {receptionData
        .filter((it) => it.status === 'show')
        .map((it) => {
          return (
            <TableItemWrapper
              onClick={() => {
                setIsClick(`${it.name}`);
                setReceptionDetailData(it);
              }}
              title={isClick}
              theme={it.name}
            >
              <TableNameText>{it.name}</TableNameText>
              <TableNumberText>{it.number}</TableNumberText>
              <TableAddressText>{it.address}</TableAddressText>
              {it.receptionItem.indexOf(',') !== -1 ? (
                <TableReceptionItemText>
                  {it.receptionItem.split(',', 1)} 외{' '}
                  {it.receptionItem.split(',').length - 1}개
                </TableReceptionItemText>
              ) : (
                <TableReceptionItemText>
                  {it.receptionItem}
                </TableReceptionItemText>
              )}

              <TableDateText>{it.date}</TableDateText>
              {it.request ? (
                <TableRequestWrapper>
                  <TableRequestButton>요청사항</TableRequestButton>
                </TableRequestWrapper>
              ) : (
                ''
              )}
            </TableItemWrapper>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1600px;
  height: calc(100vh - 350px);

  border: 1px solid #d1d6db;
`;

const TableHeader = styled.div`
  display: flex;

  width: 1598px;
  height: 53px;

  background: #f2f4f6;

  border-bottom: 1px solid #8b95a1;
`;

const TableNameTitle = styled.div`
  display: flex;
  align-items: center;

  width: 227px;
  height: 53px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #4e5968;

  padding: 12px 16px;
`;

const TableNumberTitle = styled(TableNameTitle)`
  width: 253px;
`;

const TableAddressTitle = styled(TableNumberTitle)`
  width: 391px;
`;

const TableReceptionItemTitle = styled(TableNumberTitle)`
  width: 227px;
`;

const TableDateTitle = styled(TableNumberTitle)`
  width: 370px;
`;

const TableRequestTitle = styled(TableNumberTitle)`
  width: 128px;
`;

const TableItemWrapper = styled(TableHeader)`
  background-color: ${(props) =>
    props.title === props.theme ? '#8585ff53' : '#fff'};
  border: none;

  cursor: pointer;
`;

const TableNameText = styled(TableNameTitle)`
  color: #000000;
`;

const TableNumberText = styled(TableNumberTitle)`
  font-weight: 400;
  color: #000000;
`;

const TableAddressText = styled(TableAddressTitle)`
  font-weight: 400;
  color: #000000;
`;

const TableReceptionItemText = styled(TableReceptionItemTitle)`
  font-weight: 400;
  color: #000000;
`;

const TableDateText = styled(TableDateTitle)`
  font-weight: 400;
  color: #000000;
`;

const TableRequestWrapper = styled(TableRequestTitle)`
  padding: 12px 10px;
`;

const TableRequestButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 207px;
  height: 29px;
  border: none;

  background: #8585ff;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  cursor: pointer;
`;

export default ReceptionStatusTable;
