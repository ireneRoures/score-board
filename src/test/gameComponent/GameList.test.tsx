import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { GameListComponent } from '../../components/GameListComponent'
import { GameService } from '../../services/GameService';

beforeEach(() => {
    const gameService = new GameService()
    const localTeam = 'Munich'
    const awayTeam = 'London'
    gameService.add(localTeam, awayTeam)
})
afterEach(() => {
    const gameService = new GameService()
    gameService.clean()
})

test('render game list: with games', () => {
    const gameService = new GameService()
    render(<GameListComponent />)
    expect(screen.getAllByText(/Munich 0 - London 0/i).length).toBe(gameService.get().length)
})

test('screen game list has create game button', () => {
    render(<GameListComponent />)
    expect(screen.getByText(/Create new game/i)).toBeInTheDocument()
})

test('screen game list has edit score button', () => {
    const gameService = new GameService()
    render(<GameListComponent />)
    expect(screen.getAllByText(/Edit score/i).length).toBe(gameService.get().length)
})

test('screen game list has finish game button', () => {
    const gameService = new GameService()
    render(<GameListComponent />)
    expect(screen.getAllByText(/Finish game/i).length).toBe(gameService.get().length)
})

test('screen game list: finish game', () => {
    const gameService = new GameService()
    render(<GameListComponent />)
    fireEvent.click(screen.getAllByText(/Finish game/i)[0])
    expect(gameService.get().length).toBe(0)
})