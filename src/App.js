import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import BreedPage from './pages/BreedPage.js';
import DogsPage from './pages/DogsPage.js';

class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/breed">
            <BreedPage/>
          </Route>
          <Route exact path="/dogs">
            <DogsPage/>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default App;
