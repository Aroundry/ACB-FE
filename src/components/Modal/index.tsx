import styled from '@emotion/styled';
import ConfirmModal from './ConfirmModal';
import ReceptionDetailModal from './ReceptionDetailModal';

export interface Props {
  closeModal: () => void;
  species?: string;
}
const Modal = ({ closeModal, species }: Props) => {
  return (
    <ModalWrap>
      <ModalBackGround onClick={closeModal} />
      {species === 'ReceptionDetail' ? (
        <ReceptionDetailModal closeModal={closeModal} />
      ) : (
        <ConfirmModal closeModal={closeModal} />
      )}
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ModalBackGround = styled.div`
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default Modal;
