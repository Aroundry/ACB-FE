import styled from '@emotion/styled';
import router from 'next/router';

interface Props {
  title: string;
  todayDate: string;
  id: string;
}

const QnaTable = (props: Props) => {
  const onClickDetail = () => {
    router.push(`/qna/detail/${props.id}`);
  };
  return (
    <NoticeWarpper>
      <Item>{props.todayDate}</Item>
      <Item onClick={onClickDetail} style={{ cursor: 'pointer' }}>
        {props.title}
      </Item>
    </NoticeWarpper>
  );
};

const NoticeWarpper = styled.div`
  display: grid;
  margin: 30px auto 0px auto;
  width: 70%;
  height: 80px;
  grid-template-columns: 1fr 4fr 200px;

  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #333d4b;
  border-bottom: 2px solid #333d4b18;
`;

const Item = styled.div``;

export default QnaTable;
