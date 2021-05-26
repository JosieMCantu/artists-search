/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import SongsContainer from './SongsContainer';
import { MemoryRouter } from 'react-router';
import mockData from '../../fixtures/mock-data-song.json'

const server = setupServer(
    rest.get(`http://musicbrainz.org/ws/2/recording?release=59211ea4-ffd2-4ad9-9a4e-941d3148024a&fmt=json`, (req, res, ctx) => {
        return res(ctx.json(mockData));
    })
);

describe('SongsContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('renders a loading element', async () => {
        render(<MemoryRouter><SongsContainer/></MemoryRouter>);
        const loading = await screen.getByText('LOADING...');
         return waitFor(()=> {
          expect(loading).toMatchSnapshot();  
        });
    });

    it('renders a list of releases by an artists', async ()=> {
        render(<MemoryRouter><SongsContainer/></MemoryRouter>);
        const ul = await screen.findByRole('list', { name: 'songs'});
        return waitFor(()=> {
          expect(ul).toMatchSnapshot();  
        });
        
    });
});
