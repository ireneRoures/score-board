import { GameService } from "../../services/GameService"

test('create game', () => {
    const gameService = new GameService()
    const game = gameService.add('local team', 'away team')

    expect(game.local.name).toBe('local team')
    expect(game.away.name).toBe('away team')

    expect(game.localScore).toBe(0)
    expect(game.awayScore).toBe(0)
})