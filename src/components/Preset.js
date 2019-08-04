import React, { Component } from 'react'
import axios from 'axios'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class Preset extends Component {

    state = {
        cityArr: null,
        nameArr: null
    }

    componentDidMount() {
      let citiesArray = [
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
      ]
      let arrayLength = citiesArray.length

        for (var i = 0; i < arrayLength; i++) {
          console.log(citiesArray[i].name)

        
          //Do something
          axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${citiesArray[i].lat}&lon=${citiesArray[i].lon}&appid=${apiKey}&units=imperial`).then(res =>{
            this.setState({
                cityArr: res.data,
                nameArr: citiesArray[i]
            })
            console.log(this.state.cityArr.main)
          }).catch(err => console.log(err))
        }
        
    }
    
    render(){
        return(
            <React.Fragment>
                    <div className="container mt-3">
                        <div className="card" style={{width: 18 + 'em'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.cityArr.main}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Preset