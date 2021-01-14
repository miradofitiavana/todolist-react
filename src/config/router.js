import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from '../screens/home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Redirect to='/home'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
