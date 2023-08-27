import React from 'react';
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton } from '@coreui/react';

const PreviewModal = ({ isOpen, toggleModal, title, content }) => {
  return (
    <CModal show={isOpen} onClose={toggleModal}>
      <CModalHeader closeButton>{title}</CModalHeader>
      <CModalBody>{content}</CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={toggleModal}>Close</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default PreviewModal;
