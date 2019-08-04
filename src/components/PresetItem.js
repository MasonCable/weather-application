import React, { Component } from 'react'
import moscow from '.././assets/moscow.jpg'
import axios from 'axios'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class PresetItem extends React.Component {
    state = {
        temp: ' '
    }
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&appid=${apiKey}&units=imperial`)
        .then(res => {
            this.setState({temp: res.data.main.temp})
            console.log(this.state)
        }).catch(err => (console.log(err)))

        
    }
    render(){
        const {cityName, lon, lat} = this.props
        return(
            <div className="m-2">
                <div className="card" style={{width: 18 + 'em'}}>
                    <img src={moscow} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Hello from {cityName}</h5>
                        <p className="card-text">{this.state.temp}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        )
    }
}

export default PresetItem