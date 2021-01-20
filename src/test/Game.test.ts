import { Team } from "../model/Team"
import { GameService } from "../services/GameService"

test('game service', () => {
    const gameService = new GameService()
})

test('get list of games empty', () => {
    const gameService = new GameService()
    const games = gameService.get()
    expect(games.length).toBe(0)
})

test('create game', () => {
    const gameService = new GameService()
    const game = gameService.add('local team', 'away team')

    expect(game.local.name).toBe('local team')
    expect(game.away.name).toBe('away team')

    expect(game.localScore).toBe(0)
    expect(game.awayScore).toBe(0)
})