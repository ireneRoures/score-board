import React from 'react';
import { Alert } from "react-bootstrap"
import { Game } from '../model/Game';
import { GameService } from '../services/GameService';

export const UserListComponent = () => {

    const gameService = new GameService
    const games = gameService.get()

    function renderGames() {
        const summary = gameService.summary()
        return (
            <div>
                {summary.map((game: Game) => {
                    return(<div key={game.id}>{game.toString()}</div>)
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
        </div>
    )
}