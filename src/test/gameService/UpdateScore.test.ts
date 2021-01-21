import { GameService } from "../../services/GameService"

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