import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import ReadingPage from './containers/readingPage';
import TafsirPage from './containers/tafsirPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/read' component={ReadingPage} />
              <Route exact path='/tafsir' component={TafsirPage} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
