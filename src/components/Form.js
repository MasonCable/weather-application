import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class Form extends Component{
	state = {
    	temp: null,
    	wind: null,
    	humidity: null
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
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`).then(resp =>{
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
          {/* <div className="link">
                <Link to='/info'> <button type="button" className="btn btn-link">This is a link</button></Link>
          </div> */}
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