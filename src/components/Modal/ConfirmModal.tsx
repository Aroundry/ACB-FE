import styled from '@emotion/styled';
import Image from 'next/image';
import X from '@icons/X.png';
import { deleteObjectFromListAtom } from '@atoms/reception';
import { useSetRecoilState } from 'recoil';

export interface Props {
  closeModal: () => void;
}

const ConfirmModal = ({ closeModal }: Props) => {
  const setDeleteObjectFromList = useSetRecoilState(deleteObjectFromListAtom);
  return (
    <Wrapper>
      <Title>접수삭제</Title>
      <Text>
        삭제한 정보는 복구가 불가능합니다.
        <br />
        정말 삭제할까요?
      </Text>
      <Floor>
        <p> </p>
        <ButtonWrapper>
          <CancelButton onClick={closeModal}>
            <Image src={X} alt="X" />
            취소
          </CancelButton>
          <ConfirmButton
            onClick={() => {
              closeModal();
              setDeleteObjectFromList(true);
            }}
          >
            확인
          </ConfirmButton>
        </ButtonWrapper>
      </Floor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 624px;
  height: 327px;
  background: #ffffff;
  border-radius: 7px;

  padding: 24px;
`;

const Title = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #000000;

  margin-bottom: 24px;
`;

const Text = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;

  color: #000000;

  margin-bottom: 101px;
`;

const Floor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(160px + 16px + 107px);
`;

const ButtonText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  cursor: pointer;
`;

const CancelButton = styled(ButtonText)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 14px;
  width: 160px;
  height: 48px;

  background: #0000cd;
  border-radius: 7px;

  color: #ffffff;
`;

const ConfirmButton = styled(ButtonText)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 107px;
  height: 48px;

  background: #ffffff;

  color: #8585ff;

  border: 1px solid #8585ff;
  border-radius: 7px;
`;

export default ConfirmModal;
