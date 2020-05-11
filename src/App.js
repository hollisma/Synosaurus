import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import InputBox from './InputBox'
import About from './About'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route component={InputBox} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
