import PT from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);
    
    return function cleanup() {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]); // includem onClose în lista de dependențe

  const onBackdropClick = (event) => {
    if (event.currentTarget === event.target) onClose();
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PT.func,
  children: PT.node,
};

export default Modal;