import { qnaListAtom } from '@atoms/qnaList';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import QnaTable from '@components/QNA/QnaTable';

const QNA = () => {
  const router = useRouter();
  const onClickWrite = () => {
    const id = Math.floor(Math.random() * 1000000);
    router.push(`/qna/post/${id}`);
  };
  const qnaList = useRecoilValue(qnaListAtom);
  return (
    <>
      <NoticeContainer>
        <Item>작성일</Item>
        <Item>제목</Item>
        <Button onClick={onClickWrite}>작성하기</Button>
      </NoticeContainer>
      {qnaList.map((it) => {
        return <QnaTable title={it.title} todayDate={it.date} id={it.id} />;
      })}
    </>
  );
};

const NoticeContainer = styled.div`
  display: grid;
  margin: 30px auto 0px auto;
  width: 70%;
  height: 80px;
  grid-template-columns: 1fr 4fr 200px;
  border-bottom: 2px solid #333d4b;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #333d4b;
`;

const Item = styled.div``;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  height: 60px;
  border-radius: 5px;
  color: #333d4b;
  background-color: #f3f3f3;
`;

export default QNA;
