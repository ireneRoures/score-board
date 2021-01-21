import { Team } from "./Team";

export class Game {
    id: number
    local: Team
    away: Team
    localScore: number
    awayScore: number
    date: number

    constructor(localTeam: string, awayTeam: string) {
        this.id = Math.random()
        this.local = new Team(localTeam)
        this.away = new Team(awayTeam)
        this.localScore = 0
        this.awayScore = 0
        this.date =  new Date().getTime()
    }

    setScore(localScore: number, awayScore: number) {
        this.localScore = localScore
        this.awayScore = awayScore
    }

    toString(): string {
        return this.local.name + ' ' + this.localScore + ' - ' + this.away.name + ' ' + this.awayScore
    }

    getTotalScore(): number {
        return this.localScore + this.awayScore
    }
}