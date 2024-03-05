// Thanks to https://blog.logrocket.com/creating-reusable-pop-up-modal-react/
// for this Modal guide
import React, { useRef, useEffect, useState } from 'react';
import './modal.css'

function Modal({isOpen, hasCloseBtn=true, onClose, children}){
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if(onClose){
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'escape'){
      handleCloseModal();
    }
  }

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);


  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className='modal'>
      {hasCloseBtn && (
        <button className='modal-close-btn' onClick={handleCloseModal}>
          close 
        </button>
      )}
      {children}
    </dialog>
  )
}


export default Modal
