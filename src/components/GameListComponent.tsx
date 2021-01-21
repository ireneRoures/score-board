import React from 'react';
import { Alert, Button } from "react-bootstrap"
import { Game } from '../model/Game';
import { GameService } from '../services/GameService';

export const GameListComponent = () => {

    const gameService = new GameService
    const games = gameService.get()

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
                                <Button onClick={() => gameService.finish(game.id)}>Finish game</Button>
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
            <Button>Create new game</Button>
        </div>
    )
}