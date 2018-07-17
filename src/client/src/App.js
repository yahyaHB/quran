import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import ReadingPage from './containers/readingPage';
import TafsirPage from './containers/tafsirPage';
import { Provider } from 'react-redux'
import './App.css';
import store from './store' 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/read' component={ReadingPage} />
              <Route exact path='/tafsir' component={TafsirPage} />
            </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
