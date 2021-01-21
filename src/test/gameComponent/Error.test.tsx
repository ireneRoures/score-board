import React from 'react';
import { render, screen } from '@testing-library/react'
import { GameListComponent } from '../../components/GameListComponent'

test('render game list: without games', () => {
    render(<GameListComponent />)
    expect(screen.getByRole('alert')).toHaveTextContent(/There aren't games right now/i)
})