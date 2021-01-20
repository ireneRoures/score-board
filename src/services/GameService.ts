import { Game } from "../model/game";

export class GameService {
    get() {
        return [];
    }
    
    add(localTeam: string, awayTeam: string) {
        return new Game(localTeam, awayTeam)
    }

}