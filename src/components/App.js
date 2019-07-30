import React, { Component } from 'react'
import '../styles/App.css'
import Form from './Form'
import InfoPage from './InfoPage'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path ='/' component = {Form}/>
          <Route exact path = '/info' component ={InfoPage}/>
        </div>
      </Router>
    )
  }
}

export default App