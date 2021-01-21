import { GameService } from "../../services/GameService"

beforeEach(() => {
    const gameService = new GameService()
    gameService.clean()
})

test('finish a game', () => {
    const gameService = new GameService()
    const gameId = gameService.add('local team', 'away team')
    gameService.finish(gameId.id)
    expect(gameService.get().length).toBe(0)
})

test('finish a game that do not exist', () => {
    const gameService = new GameService()
    const gameId = gameService.add('local team', 'away team')
    gameService.finish(123)
    expect(gameService.get().length).toBe(1)
})

test('finish a game without started games', () => {
    const gameService = new GameService()
    gameService.finish(123)
    expect(gameService.get().length).toBe(0)
})
