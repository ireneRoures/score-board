import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap"
import { GameService } from '../services/GameService'

interface Props {
    localTeamScore: number
    awayTeamScore: number
    gameId: number
    handleSubmit: (gameId: number, localScore: number, awayScore: number) => void
}
export const EditScoreGameForm = (props: Props) => {
    
    const [localScore, setLocalScore] = useState(props.localTeamScore)
    const [awayScore, setAwayScore] = useState(props.awayTeamScore)

    function onSubmit(e: any) {
        e.preventDefault()
        props.handleSubmit(props.gameId, localScore, awayScore)
    }
    
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="localScore">
                <Form.Label>Local team</Form.Label>
                <Form.Control
                    placeholder="score"
                    type="number"
                    value={localScore}
                    onChange={(e: any) => setLocalScore(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="awayScore">
                <Form.Label>Away team</Form.Label>
                <Form.Control
                    placeholder="score"
                    type="number"
                    value={awayScore}
                    onChange={(e: any) => setAwayScore(e.target.value)}
                    required
                />
            </Form.Group>
            
            <Button variant="primary" type="submit">Change score</Button>
        </Form>
    )
}