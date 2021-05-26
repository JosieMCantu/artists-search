/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import ArtistContainer from './ArtistContainer';
import mockData from '../../albumFixtures/test.json';

const server = setupServer(
  rest.get(
    'http://musicbrainz.org/ws/2/release?artist=185527bf-c293-4c24-8213-ed98fb8976be&fmt=json',
    (req, res, ctx) => {
      return res(ctx.json(mockData));
    }
  )
);

describe('Artist page tests', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('renders albums by artist to the screen', async () => {
    render(
      <MemoryRouter>
        <ArtistContainer
          match={{ params: { id: '185527bf-c293-4c24-8213-ed98fb8976be' } }}
        />
      </MemoryRouter>
    );
    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'albums' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
