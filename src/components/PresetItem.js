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
            // console.log(res.data)
        }).then(() => {
            let f = this.state.temp
            let step1 = f - 32
            let step2 = step1 / 5
            let step3 = step2 + 32
            console.log(step3)
        }).catch(err => (console.log(err)))

        
    }
    render(){
        const {cityName, lon, lat, imgUrl} = this.props
        return(
            <div className="m-2 border border-success border-left-0 border-right-0 border-bottom-0" >
                <div className="card-body" style={{width: 30 + 'rem', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    
                        <img src={imgUrl} className="card-img-top" alt="..." style={{width: 45 + '%'}}/>
                    
                    <div className="card-body">
                        <h3 className="card-title ">{cityName}</h3>
                        <p className="card-text"> <strong>Temperature</strong>: {this.state.temp} 	&#176; F</p> 
                        <br/> 
                        <p className="card-text"><strong>Coordinates</strong>: {lat} &#176; N ,
                        <br/>
                         {lon} &#176; W
                        </p>
                        {/* <button>
                        Hello
                        </button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PresetItem