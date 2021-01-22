import React from 'react';
import { Modal } from "react-bootstrap"
import { EditScoreGameForm } from './EditScoreGameForm';

interface Props {
    show: boolean
    localScore: number
    awayScore: number
    gameId: number
    onClose: () => void
    handleSubmit: (gameId: number, localScore: number, awayScore: number) => void
}

export const EditScoreGameModal = (props: Props) => {

    return (
        <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditScoreGameForm
                localTeamScore={props.localScore}
                awayTeamScore={props.awayScore}
                gameId={props.gameId}
                handleSubmit={props.handleSubmit}
            />
        </Modal.Body>
      </Modal>
    )
}