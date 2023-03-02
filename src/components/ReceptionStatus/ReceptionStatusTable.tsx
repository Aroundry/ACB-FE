import styled from '@emotion/styled';

const ReceptionStatusTable = () => {
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
      <TableItemWrapper>
        <TableNameText>권상욱</TableNameText>
        <TableNumberText>010-4641-1242</TableNumberText>
        <TableAddressText>세종대학교 학생회관 518호</TableAddressText>
        <TableReceptionItemText>티셔츠 외 10개</TableReceptionItemText>
        <TableDateText>2022-02-08 오후 02시 30분</TableDateText>
        <TableRequestWrapper>
          <TableRequestButton>요청사항</TableRequestButton>
        </TableRequestWrapper>
      </TableItemWrapper>
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
  background-color: #fff;
  border: none;
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