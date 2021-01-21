import { Game } from "../model/Game"

let games: Game[]
export class GameService {

    constructor() {
        if(!games) {
            games = []
        }
    }

    get() {
        return games
    }

    add(localTeam: string, awayTeam: string) {
        const newGame = new Game(localTeam, awayTeam)
        games.push(newGame)
        return newGame
    }

    finish(gameId: number) {
        games = games.filter((game: Game) => game.id != gameId)
    }

    setScore(gameId: number, localScore: number, awayScore: number): Game {
        const game = games.filter((game: Game) => game.id === gameId)
        
        try {
            game[0].setScore(localScore, awayScore)
            return game[0]
        } catch (error) {
            throw new Error('Not found')
        }
    }

    clean() {
        games = []
    }

    summary() {
        return games.sort((game1: Game, game2: Game) => game1.getTotalScore() - game2.getTotalScore() < 0 ? 1 : -1)
    }
}