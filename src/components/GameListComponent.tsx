import React, { useEffect, useState } from 'react';
import { Alert, Button } from "react-bootstrap"
import { Game } from '../model/Game';
import { GameService } from '../services/GameService';
import { CreateGameModal } from './CreateGameModal';

export const GameListComponent = () => {

    const gameService = new GameService
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [games, setGames] = useState(gameService.get())

    function onCloseCreateModal() {
        setShowCreateModal(false)
    }
    function onOpenCreateModal() {
        setShowCreateModal(true)
    }
    function onCreateGame(localTeam: string, awayTeam: string) {
        gameService.add(localTeam, awayTeam)
        setGames(gameService.get())
        setShowCreateModal(false)
    }
    function onFinishGame(gameId: number) {
        gameService.finish(gameId)
        setGames(gameService.get())
    }

    function renderGames() {
        const summary = gameService.summary()
        return (
            <div>
                {summary.map((game: Game) => {
                    return(
                        <div key={game.id}>
                            <div>{game.toString()}</div>
                            <div>
                                <Button>Edit score</Button>
                                <Button onClick={() => onFinishGame(game.id)}>Finish game</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            {games.length === 0 ?
                <Alert variant="danger">There aren't games right now</Alert>
            :
                <div>{renderGames()}</div>
            }
            <Button onClick={onOpenCreateModal}>Create new game</Button>
            <CreateGameModal show={showCreateModal} onClose={onCloseCreateModal} handleSubmit={onCreateGame}/>
        </div>
    )
}