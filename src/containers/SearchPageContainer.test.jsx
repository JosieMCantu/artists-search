/**
 * @jest-environment jsdom
 */
import React from 'react';
import SearchPageContainer from '../containers/SearchPageContainer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('SearchPageContainer tests', () => {
  it('renders the search page to the screen', async () => {
    render(<MemoryRouter><SearchPageContainer/></MemoryRouter>);

    const input = await screen.findByLabelText('Search for an artist:');
    userEvent.type(input, 'prince');

    const submitButton = await screen.findByRole('button', { name: 'button' });

    userEvent.click(submitButton);
        

    const ul = await screen.findByRole('list', { name: 'search' });

    return waitFor(() => {
      expect(ul).toMatchSnapshot();
    });
  });
});
