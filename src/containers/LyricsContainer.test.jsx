/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import LyricsContainer from './LyricsContainer';
import mockLyricData from '../../fixtures/mockLyricData.json';
import { MemoryRouter } from 'react-router';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get(
    'https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime',
    (req, res, ctx) => {
      return res(ctx.json(mockLyricData));
    }
  )
);

describe('Lyrics Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // eslint-disable-next-line max-len
  it('displays the lyrics of a song given the artist and title in the parameters', async () => {
    render(
      <MemoryRouter>
        <LyricsContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    return waitFor(() => {
      const lyrics = screen.findByRole('article');
      expect(lyrics).toMatchSnapshot();
    });
  });
});
