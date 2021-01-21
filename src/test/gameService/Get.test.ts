import { GameService } from "../../services/GameService"

beforeEach(() => {
    const gameService = new GameService()
    gameService.clean()
})

test('get list of games empty', () => {
    const gameService = new GameService()
    const games = gameService.get()
    expect(games.length).toBe(0)
})

test('get a list of one or more games', () => {
    const gameService = new GameService()
    gameService.add('local team', 'away team')
    expect(gameService.get().length).toBe(1)
})