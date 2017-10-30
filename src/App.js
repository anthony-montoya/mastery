import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Chores from './components/Chores/ChoresList';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}> </Route>
          <Route path='/user-profile' component={Profile}> </Route>
          <Route path='/chore-list' component={Chores}> </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
