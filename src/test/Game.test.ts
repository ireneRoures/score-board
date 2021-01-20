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

test('get a list of one or more games', () => {
    const gameService = new GameService()
    gameService.add('local team', 'away team')
    expect(gameService.get().length).toBe(1)
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

test('update score from game', () => {
    const gameService = new GameService()
    const localScore = 6
    const awayScore = 3
    const game = gameService.add('local team', 'away team')
    const updatedGame = gameService.setScore(game.id, localScore, awayScore)

    expect(updatedGame.localScore).toBe(localScore)
    expect(updatedGame.awayScore).toBe(awayScore)
    expect(updatedGame.id).toBe(game.id)
})

test('update score from game that not exist', () => {
    const gameService = new GameService()
    const localScore = 6
    const awayScore = 3
    
    try {
        const updatedGame = gameService.setScore(123, localScore, awayScore)
    } catch(error) {
        expect(error.message).toBe('Not found')
    }
})