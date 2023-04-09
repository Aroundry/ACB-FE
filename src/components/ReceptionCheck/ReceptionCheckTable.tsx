import styled from '@emotion/styled';
import useGetCustomerReception from '@hooks/queries/useGetCustomerReception';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface Props {
  phoneNumber: string;
  // setShow: Dispatch<SetStateAction<boolean>>;
}

const ReceptionCheckTable = ({ phoneNumber }: Props) => {
  const key = useRef(0);
  const { data } = useGetCustomerReception(phoneNumber);
  console.log('랜더링 되었음');
  // if (!data) {
  //   setShow(false);
  //   alert('조회된 결과가 없습니다.');
  // }

  return (
    <TableWrapper>
      {data?.map((it) => {
        key.current++;
        return <Wrapper key={key.current}>{it.name}</Wrapper>;
      })}
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  width: 90vw;
  min-height: 30vh;

  border-radius: 7px;
  background-color: #928f8f50;
`;

const Wrapper = styled.div`
  padding: 10px;
  color: black;
`;

export default ReceptionCheckTable;
