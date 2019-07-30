import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class Form extends Component{
	state = {
    	temp: undefined,
    	wind: undefined,
    	humidity: undefined
  	}

   getWeather = (e) =>{
      e.preventDefault()
       const city = e.target.elements.city.value
       const country = e.target.elements.country.value

      if(city === '')
        {
          alert('We need to know your city.')
        }
        else if(country === '')
        {
          alert('We need to know your country.')
        }
        else
          {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`).then(resp =>{
              console.log(resp.data)
                  this.setState({
                    temp: resp.data.main.temp,
                    wind: resp.data.wind.speed,
                    humidity: resp.data.main.humidity
                  })
                })
            		return <Redirect to='/info'/>

              }


          }
 
	

	render(){

		return(
			<div className="container">
			<div id="head">
				
				<h2>Temperature: <span className='info'>{this.state.temp}</span></h2>
				<h2>Wind Speeds: <span className='info'>{this.state.wind}</span></h2>
				<h2>Humidity: <span className='info'>{this.state.humidity}</span></h2>
				
			</div>
				<form onSubmit={this.getWeather}>
					<input type="text" name="city" placeholder="Your City..." />
					<input type="text" name="country" placeholder="Your Country..." />
					<button onClick={this.props.handleClick} type="submit">Search</button>
				</form>
			</div>
		)
	}
}

export default Form