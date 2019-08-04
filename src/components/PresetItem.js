import React, { Component } from 'react'
import moscow from '.././assets/moscow.jpg'
import axios from 'axios'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class PresetItem extends React.Component {
    state = {
        temp: ' ',
        windSpeeds: ''
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${apiKey}&units=imperial`)
        .then(res => {
            this.setState({temp: res.data.main.temp})
            console.log(res.data)
        }).catch(err => (console.log(err)))

        
    }
    render(){
        const {cityName, lon, lat, imgUrl} = this.props
        return(
            <div className="m-2 card" >
                <div className="card-body" style={{width: 18 + 'em', justifyContent:'space-around'}}>
                    <img src={imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Hello from {cityName}</h5>
                        <p className="card-text"> <strong>Temperature</strong>: {this.state.temp} 	&#176; F</p> 
                        <br/> 
                        <p className="card-text"><strong>Coordinates</strong>: {lat}, {lon} </p>
                        
                </div>
                </div>
            </div>
        )
    }
}

export default PresetItem