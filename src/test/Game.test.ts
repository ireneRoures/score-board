import { GameService } from "../services/GameService";

test('game service', () => {
    const gameService = new GameService();
})

test('get list of games', () => {
    const gameService = new GameService();
    const games = gameService.getGames()
    expect(games.length).toBe(0);
})