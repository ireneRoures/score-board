import { GameService } from "../../services/GameService"

beforeEach(() => {
    const gameService = new GameService()
    gameService.clean()
})

test('summary format game', () => {
    const gameService = new GameService()
    const game = gameService.add('local team', 'away team')
    expect(game.toString()).toBe('local team 0 - away team 0')
})

test('summary order: games with the same score', () => {
    const gameService = new GameService()
    
    const game1 = gameService.add('local team1', 'away team1')
    const game2 = gameService.add('local team2', 'away team2')

    const summary = gameService.summary()
    expect(summary[0].toString()).toBe('local team2 0 - away team2 0')
})

test('summary order: games with different score', () => {
    const gameService = new GameService()
    
    const game1 = gameService.add('local team1', 'away team1')
    gameService.setScore(game1.id, 6, 3)
    const game2 = gameService.add('local team2', 'away team2')
    gameService.setScore(game2.id, 2, 4)

    const summary = gameService.summary()
    expect(summary[0].toString()).toBe('local team1 6 - away team1 3')
})


test('summary order: games with different and the same score', () => {
    const gameService = new GameService;
    expect(gameService.get().length).toBe(0)

    let game = gameService.add('Mexico', 'Canada')
    gameService.setScore(game.id, 0, 5)
    game = gameService.add('Spain', 'Brazil')
    gameService.setScore(game.id, 10, 2)
    game = gameService.add('Germany', 'France')
    gameService.setScore(game.id, 2, 2)
    game = gameService.add('Uruguay', 'Italy')
    gameService.setScore(game.id, 6, 6)
    game = gameService.add('Argentina', 'Australia')
    gameService.setScore(game.id, 3, 1)
    game = gameService.add('Germany', 'Portugal')
    gameService.setScore(game.id, 5, 7)

    const summary = gameService.summary()
    expect(summary[0].toString()).toBe('Germany 5 - Portugal 7')
    expect(summary[1].toString()).toBe('Uruguay 6 - Italy 6')
    expect(summary[2].toString()).toBe('Spain 10 - Brazil 2')
    expect(summary[3].toString()).toBe('Mexico 0 - Canada 5')
    expect(summary[4].toString()).toBe('Argentina 3 - Australia 1')
    expect(summary[5].toString()).toBe('Germany 2 - France 2')
})
