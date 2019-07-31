import React, { Component } from 'react'
import '../styles/App.css'
import Form from './Form'
import InfoPage from './InfoPage'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from '../context'


class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Route exact path ='/' component = {Form}/>
            <Route exact path = '/info' component ={InfoPage}/>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App