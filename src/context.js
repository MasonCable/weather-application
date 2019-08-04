import React, { Component } from 'react'
// import axios from 'axios'

const Context = React.createContext()

// const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'
//This function is for handling search
const reducer = (state, action) => {
    switch(action.type){
        case 'FIND_ZIPCODE': 
          return {
              ...state,
              singleCity: action.payload,
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
                lon: '37.6173',
                imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/c2/25/28/beautiful-moscow.jpg'
              },
              {
                name: 'London',
                lat: '51.5074',
                lon: '0.1278',
                imgUrl: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
              },
              {
                name: 'NewYork',
                lat: '40.7128',
                lon: '74.0060',
                imgUrl: 'https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612'
              },
              {
                name: 'Las Vegas',
                lat: '36.1699',
                lon: '115.1398',
                imgUrl:'http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg'
              },
              {
                name: 'Los Angelas',
                lat: '34.0522',
                lon: '118.2437',
                imgUrl:'https://www.oxy.edu/sites/default/files/styles/banner_image/public/page/banner-images/los-angeles_main_1440x800.jpg?itok=GiOVS9-4'
              },
              {
                  name: 'Houstan',
                  lat: '29.7604',
                  lon: '95.3698',
                  imgUrl: 'data:image/jpeg;base64,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'
              }
        ],
        heading: 'Cities',
        singleCity:[],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        //  PUT GLOBAL API CALL HERE
        // console.log(this.state.cityList)
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