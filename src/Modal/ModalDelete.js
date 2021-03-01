import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {deleteDocument } from './actions'

const ModalExample = (props) => {
  const {
    buttonLabel= 'Delete',
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deletePet = async () => {
      
    const result = await deleteDocument('Pets', props.children[1])
    if (!result.statusResponse) {
      return
    }
  }

  return (
    <div>
      <Button color="btn btn-outline-danger btn-sm float-right mx-2" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Delete Pet</ModalHeader>
        <ModalBody>
          Are you sure to delete this pet ? 
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deletePet}>Delete</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;