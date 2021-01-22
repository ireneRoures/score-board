import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react'
import { GameListComponent } from '../../components/GameListComponent'
import { GameService } from '../../services/GameService';
import { EditScoreGameModal } from '../../components/EditScoreGameModal';

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

test('Show modal', () => {
    render(<GameListComponent />)
    fireEvent.click(screen.getByText('Edit score'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
})

test('Modal with local team score input', () => {
    const gameService = new GameService()
    const game = gameService.get()[0]

    render(<EditScoreGameModal show={true} onClose={()=>{}} handleSubmit={()=>{}} localScore={game?.localScore ?? 0} awayScore={game?.awayScore ?? 0} gameId={game?.id ?? 0}/>)
    expect(screen.getByLabelText('Local team')).toBeInTheDocument()
})

test('Modal with away team score input', () => {
    const gameService = new GameService()
    const game = gameService.get()[0]

    render(<EditScoreGameModal show={true} onClose={()=>{}} handleSubmit={()=>{}} localScore={game?.localScore ?? 0} awayScore={game?.awayScore ?? 0} gameId={game?.id ?? 0}/>)
    expect(screen.getByLabelText('Away team')).toBeInTheDocument()
})

test('Update game score', async () => {
    const gameService = new GameService()
    render(<GameListComponent/>)
    fireEvent.click(screen.getByText('Edit score'))
    
    const localScoreInput = screen.getByLabelText('Local team')
    fireEvent.change(localScoreInput, { target: { value: 5 } })
    expect(localScoreInput.value).toBe("5")
    
    const awayScoreInput = screen.getByLabelText('Away team')
    fireEvent.change(awayScoreInput, { target: { value: 10 } })
    expect(awayScoreInput.value).toBe("10")
    
    const submitBtn = screen.getByText('Change score')
    expect(submitBtn).toBeInTheDocument()
    fireEvent.click(submitBtn)

    expect(gameService.get().length).toBe(1)
    expect(gameService.get()[0].localScore).toBe("5")
    expect(gameService.get()[0].awayScore).toBe("10")

})
