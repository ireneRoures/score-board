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
        return new Game(localTeam, awayTeam)
    }

}