import { Game } from "../model/game";

export class GameService {

    games: Game[]

    constructor() {
        this.games = []
    }

    get() {
        return this.games
    }

    add(localTeam: string, awayTeam: string) {
        const newGame = new Game(localTeam, awayTeam)
        this.games.push(newGame)
        return newGame
    }

    finish(gameId: number) {
        this.games = this.games.filter((game: Game) => game.id != gameId)
    }
}