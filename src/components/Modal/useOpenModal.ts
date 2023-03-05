import { useState } from 'react';

export default function useOpenModal() {
  const [isOpenReceptionDetailModal, setIsOpenReceptionDetailModal] =
    useState(false);
  const [isOpenConfirmModal, setIsConfirmModal] = useState(false);

  const clickReceptionDetailModal = () => {
    setIsOpenReceptionDetailModal(true);
  };
  const closeReceptionDetailModal = () => {
    setIsOpenReceptionDetailModal(false);
  };

  const clickConfirmModal = () => {
    setIsConfirmModal(true);
  };
  const closeConfirmModal = () => {
    setIsConfirmModal(false);
  };

  return {
    isOpenReceptionDetailModal,
    clickReceptionDetailModal,
    closeReceptionDetailModal,
    isOpenConfirmModal,
    clickConfirmModal,
    closeConfirmModal,
  };
}
