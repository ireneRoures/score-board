import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap"
import { GameService } from '../services/GameService'

interface Props {
    handleSubmit: (localTeam: string, awayTeam: string) => void
}
export const CreateGameForm = (props: Props) => {
    
    const gameService = new GameService()
    const [localTeamName, setLocalTeamName] = useState('')
    const [awayTeamName, setAwayTeamName] = useState('')

    function onSubmit(e: any) {
        e.preventDefault()
        props.handleSubmit(localTeamName, awayTeamName)
    }
    
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="localTeam" onChange={(e: any) => setLocalTeamName(e.target.value)}>
                <Form.Label>Local team</Form.Label>
                <Form.Control placeholder="name" required/>
            </Form.Group>

            <Form.Group controlId="awayTeam" onChange={(e: any) => setAwayTeamName(e.target.value)}>
                <Form.Label>Away team</Form.Label>
                <Form.Control placeholder="name" required/>
            </Form.Group>
            
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}