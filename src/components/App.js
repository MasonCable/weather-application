import React, { Component } from 'react'
import '../styles/App.css'
// import Form from './Form'
import InfoPage from './InfoPage'
import Preset from './Preset'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from '../context'


class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Route exact path ='/' component = {Preset}/>
            <Route exact path = '/info/:id' component ={InfoPage}/>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App