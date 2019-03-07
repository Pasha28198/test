import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../Header';
import Users from '../../pages/Users';
import User from '../../pages/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
              <Route path="/" exact={true} component={Users}/>
              <Route path="/user/:id" exact component={User}/>
          </Switch>
      </div>
    );
  }
}

export default App;
