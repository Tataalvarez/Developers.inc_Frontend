import React from "react";
import { Modal } from 'semantic-ui-react';

export default function ModalPerfilUser(props) {
  const { show, setShow, title, children } = props;
  const onClose = () => {
    setShow(false);
  };
  return (
    <Modal size="mini" open={show} onClose={onClose}>
      {title && <Modal.Header>{title}</Modal.Header>}
      {children}
    </Modal>
  );
}
