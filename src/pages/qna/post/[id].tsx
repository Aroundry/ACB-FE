import { qnaListAtom } from '@atoms/qnaList';
import { LoginPageHeader } from '@components/Header';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const noticeDetail = () => {
  const onClickComplete = () => {
    qnaList.map((it) => temList.push(it));
    temList.unshift({
      title: title,
      text: text,
      date: todayDate,
      id: id,
    });
    setQnaList(temList);
    router.replace('/qna');
  };
  const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (2 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return year + '.' + month + '.' + day;
  };
  const [qnaList, setQnaList] = useRecoilState(qnaListAtom);
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [todayDate, setTodayDate] = useState(getToday());
  let temList = new Array();

  return (
    <>
      <LoginPageHeader />
      <Container>
        <Wrapper>
          <Form>
            <Label>제목</Label>
            <TitleInput onChange={(e) => setTitle(e.target.value)}></TitleInput>
            <Label>내용</Label>
            <TextInput onChange={(e) => setText(e.target.value)}></TextInput>
          </Form>
          <Button onClick={onClickComplete}>작성완료</Button>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 210px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
`;

const TitleInput = styled.input`
  color: #000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
`;

const TextInput = styled.textarea`
  color: #000;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;

  width: 100%;
  min-height: 200px;
  resize: vertical;
`;

const Button = styled.div`
  cursor: pointer;

  position: absolute;
  right: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  border-radius: 5px;
  width: 160px;
  height: 60px;
  background-color: #4727ff;
  color: #fff;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
`;

export default noticeDetail;
