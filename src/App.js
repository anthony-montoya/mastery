import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import router from './router';

class App extends Component {
  render() {
    return (
      <div>{router}</div>
    );
  }
}

export default App;
