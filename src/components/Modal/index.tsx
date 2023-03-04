import styled from '@emotion/styled';
import ReceptionDetailModal from './ReceptionDetailModal';

export interface Props {
  closeModal: () => void;
}
const Modal = ({ closeModal }: Props) => {
  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      <ReceptionDetailModal closeModal={closeModal} />
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  gap: 2rem;
  padding: 3.6rem 0;
  border: 1px solid var(--color-white);
  background-color: var(--color-white);
  position: absolute;
  left: 0;
  top: 0;
  width: 90%;
`;

export default Modal;
