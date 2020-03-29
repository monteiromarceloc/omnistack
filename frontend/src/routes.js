import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Login, Register, Profile, NewIncident } from './pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/incidents/new' component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}