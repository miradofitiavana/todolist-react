import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Counter from '../screens/counter'

import Home from '../screens/home'
import Potter from '../screens/potter'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/potter' component={Potter} />
        <Redirect to='/counter'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
