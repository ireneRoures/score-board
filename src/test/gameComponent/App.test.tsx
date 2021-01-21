import React from 'react';
import { render, screen } from '@testing-library/react'
import { UserListComponent } from '../../components/UserListComponent'
import { GameService } from '../../services/GameService';

test('render game list: without games', () => {
    render(<UserListComponent />)
    expect(screen.getByRole('alert')).toHaveTextContent(/There aren't games right now/i)
})

test('render game list: with games', () => {
    const gameService = new GameService()
    const localTeam = 'Munich'
    const awayTeam = 'London'
    gameService.add(localTeam, awayTeam)

    render(<UserListComponent />)
    expect(screen.getByText(/Munich 0 - London 0/i)).toBeInTheDocument()
})