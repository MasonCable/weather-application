import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class InfoPage extends Component {
    state = {
        info: {},
        temp: '',
        temp_max: '',
        temp_min: '',
        humidity: ''
    }
    //the current api call is working correctly
    componentDidMount() { 
        axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${this.props.match.params.id},us&appid=${apiKey}&units=imperial`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    info: res.data,
                    temp: res.data.main.temp,
                    temp_max: res.data.main.temp_max,
                    temp_min: res.data.main.temp_min,
                    humidity: res.data.main.humidity
                })
            }).catch(err => console.log(err))
            
    }
    render(){
       if(this.state.temp === ''){
           return (
               <Spinner/>
           )
       } else {
            return(
            <React.Fragment>
                <div className="container border border-success p-4" style={{ marginTop: 2 + 'em'}}>
                {/* <button className='mr-2'>Go Back</button> */}
                
                    <Link to='/'><button type="button" className="btn btn-primary btn-lg btn-block mb-2">Go Back Home</button></Link>
                    <div className="card" style={{width: 100 + '%',}}>
                        
                        <div className="card-body">
                            <h5 className="card-title">{this.state.info.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span>Temperature</span>: {this.state.temp}&#176; F</li>
                            <li className="list-group-item"><span>Temperature(max)</span>: {this.state.temp_max}&#176; F</li>
                            <li className="list-group-item"><span>Temperature(min)</span>: {this.state.temp_min}&#176; F</li>
                            <li className="list-group-item"><span>Humidity</span>: {this.state.humidity}%</li>
                        </ul>
                      
                    </div> 
                </div>    
            </React.Fragment>
        )
       }
    }
}

export default InfoPage

