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

    setScore(gameId: number, localScore: number, awayScore: number): Game {
        const game = this.games.filter((game: Game) => game.id === gameId)
        
        try {
            game[0].setScore(localScore, awayScore)
            return game[0]
        } catch (error) {
            throw new Error('Not found')
        }
    }
}