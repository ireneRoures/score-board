import React from 'react';
import { Modal } from "react-bootstrap"
import { CreateGameForm } from './CreateGameForm';

interface Props {
    show: boolean
    onClose: () => void
}

export const CreateGameModal = (props: Props) => {

    return (
        <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Create game</Modal.Title>
        </Modal.Header>
        <Modal.Body>HERE</Modal.Body>
      </Modal>
    )
}