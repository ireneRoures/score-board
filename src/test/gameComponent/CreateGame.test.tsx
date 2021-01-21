import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { GameListComponent } from '../../components/GameListComponent'
import { CreateGameModal } from '../../components/CreateGameModal';

test('create match', () => {
    render(<GameListComponent />)
    fireEvent.click(screen.getByText(/Create new game/i))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
})