import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'

const routing = (
  <Router>
    <Switch>
      <Route exact path="/"><App /></Route>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
