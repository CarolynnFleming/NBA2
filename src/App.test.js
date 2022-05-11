import { redender, render, screen } from'@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test('should navigate between detail and list view', async ()=> {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    screen.getByText('Computing Life Forms....')
    const finder = await screen.findByText('Morty Smith');
    userEvent.click(finder);

    await screen.findByText('Loading The Strange....');
    
})