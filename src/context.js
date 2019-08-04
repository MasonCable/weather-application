import React, { Component } from 'react'
// import axios from 'axios'

const Context = React.createContext()

// const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'
//This function is for handling search
const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TRACKS': 
          return {
              ...state,
              cityList: action.payload,
              heading: 'Search Results'
          }
          default :
            return state
    }
}

export class Provider extends Component {
    state = {
        cityList:[
               {
                name: 'Moscow',
                lat: '55.7558',
                lon: '37.6173'
              },
              {
                name: 'London',
                lat: '51.5074',
                lon: '0.1278'
              },
              {
                name: 'NewYork',
                lat: '40.7128',
                lon: '74.0060'
              },
              {
                name: 'Las Vegas',
                lat: '36.1699',
                lon: '115.1398'
              }
        ],
        heading: 'Cities',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        //  PUT GLOBAL API CALL HERE
        console.log(this.state.cityList)
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer