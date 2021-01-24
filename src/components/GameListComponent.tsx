import React, { useEffect, useState } from 'react';
import { Alert, Button } from "react-bootstrap"
import { Game } from '../model/Game';
import { GameService } from '../services/GameService';
import { CreateGameModal } from './CreateGameModal';
import { EditScoreGameModal } from './EditScoreGameModal';

export const GameListComponent = () => {

    const gameService = new GameService
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditScoreModal, setShowEditScoreModal] = useState(false)
    const [games, setGames] = useState(gameService.get())
    const [game, setGame] = useState<Game>()

    function onCloseCreateModal() {
        setShowCreateModal(false)
    }
    function onOpenCreateModal() {
        setShowCreateModal(true)
    }
    function onCloseEditScoreModal() {
        setShowEditScoreModal(false)
    }
    function onOpenEditScoreModal(game: Game) {
        setGame(game)
        setShowEditScoreModal(true)
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
    function onEditScore(gameId: number, localScore: number, awayScore: number) {
        gameService.setScore(gameId, localScore, awayScore)
        setGames(gameService.get())
        setShowEditScoreModal(false)
    }

    function renderGames() {
        const summary = gameService.summary()
        return (
            <div>
                {summary.map((game: Game) => {
                    return(
                        <div className='game-list-item' key={game.id}>
                            <div className='game-txt'>{game.toString()}</div>
                            <div>
                                <Button onClick={() => onOpenEditScoreModal(game)}>Edit score</Button>
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
            <Button className="create-game-btn" onClick={onOpenCreateModal}>Create new game</Button>
            <CreateGameModal
                show={showCreateModal}
                onClose={onCloseCreateModal}
                handleSubmit={onCreateGame}
            />
            <EditScoreGameModal
                show={showEditScoreModal}
                onClose={onCloseEditScoreModal}
                localScore={game?.localScore ?? 0}
                awayScore={game?.awayScore ?? 0}
                gameId={game?.id ?? 0}
                handleSubmit={onEditScore}
            />
        </div>
    )
}