import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const NoticeList = () => {
  const router = useRouter();
  const onClickNotice = () => {
    router.push('/notice/40632');
  };
  return (
    <>
      <NoticeContainer>
        <Item>작성일</Item>
        <Item>카테고리</Item>
        <Item>제목</Item>
      </NoticeContainer>
      <NoticeWrapper>
        <Item>2023.04.25</Item>
        <Item>서비스</Item>
        <Item style={{ cursor: 'pointer' }} onClick={onClickNotice}>
          AROUNDRY 서비스 안내
        </Item>
      </NoticeWrapper>
    </>
  );
};

const NoticeContainer = styled.div`
  display: grid;
  margin: 30px auto 0px auto;
  width: 70%;
  height: 80px;
  grid-template-columns: 1fr 1fr 4fr;
  border-bottom: 2px solid #333d4b;
  align-items: center;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #333d4b;
`;

const NoticeWrapper = styled(NoticeContainer)`
  margin: auto;
  border-bottom: 2px solid #333d4b13;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  color: #333d4b;
`;

const Item = styled.div``;

export default NoticeList;
