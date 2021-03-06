import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Chores from './components/Chores/ChoresList';
import PropsComponent from './components/Profile/PropsComponent';

export default (
    <Switch>
        <Route exact path='/' component={Home}> </Route>
        <Route path='/user-profile/:user_name' component={Profile}> </Route>
        <Route path='/chore-list' component={Chores}></Route>
        <Route path='/param/:name' component={PropsComponent}></Route>
    </Switch>
)