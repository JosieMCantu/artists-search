
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPageContainer from '../../containers/SearchPageContainer';
import ArtistContainer from '../../containers/ArtistContainer';
import SongsContainer from '../../containers/SongsContainer';
import LyricsContainer from '../../containers/LyricsContainer';
import './App.css';

export default function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={SearchPageContainer}/>
        <Route exact path="/:artistName/:id" component={ArtistContainer}/>
        <Route exact path="/albums/:artistName/:id" component={SongsContainer}/>
        <Route exact path="/song/:artistName/:title" component={LyricsContainer}/>
      </Switch>

    </Router>
  );
}
