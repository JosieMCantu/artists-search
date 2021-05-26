/**
 * @jest-environment jsdom
 */
import React from 'react';
import SearchPageContainer from '../containers/SearchPageContainer';
import {MemoryRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';


describe('SearchPageContainer tests', () => {
    it('renders the search page to the screen', () => {
        render(<SearchPageContainer/>)

        screen.getByText('Loading...')
    })
})