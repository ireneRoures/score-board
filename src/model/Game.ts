import { Team } from "./Team";

export class Game {
    local: Team
    away: Team
    localScore: number
    awayScore: number

    constructor(localTeam: string, awayTeam: string) {
        this.local = new Team(localTeam)
        this.away = new Team(awayTeam)
        this.localScore = 0
        this.awayScore = 0
    }
}