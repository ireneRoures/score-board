import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { GameListComponent } from '../../components/GameListComponent'
import { CreateGameModal } from '../../components/CreateGameModal';
import { GameService } from '../../services/GameService';

test('create game show modal', () => {
    render(<GameListComponent />)
    fireEvent.click(screen.getByText(/Create new game/i))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
})

test('local team input', () => {
    render(<CreateGameModal show={true} onClose={()=>{}} handleSubmit={()=>{}}/>)
    expect(screen.getByLabelText('Local team')).toBeInTheDocument()
})

test('away team input', () => {
    render(<CreateGameModal show={true} onClose={()=>{}} handleSubmit={()=>{}}/>)
    expect(screen.getByLabelText('Away team')).toBeInTheDocument()
})

test('submit create game form', () => {
    const gameService = new GameService()
    
    render(<GameListComponent />)
    fireEvent.click(screen.getByText(/Create new game/i))

    const localInput = screen.getByLabelText('Local team')
    fireEvent.change(localInput, { target: { value: 'Munich' } })
    expect(localInput.value).toBe('Munich')
    
    const awayInput = screen.getByLabelText('Away team')
    fireEvent.change(awayInput, { target: { value: 'Spain' } })
    expect(awayInput.value).toBe('Spain')

    const submitBtn = screen.getByText('Submit')
    fireEvent.click(submitBtn)
    expect(gameService.get().length).toBe(1)
})
