import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '@/views/login/index'
import Index from '@/views/index/index'

class App extends Component{
  render() {
    return (
      <Switch>
        <Route path="/login" component={ Login }></Route>
        <Route path="/" component={ Index }></Route>
      </Switch>
    )
  }
}

export default App;
