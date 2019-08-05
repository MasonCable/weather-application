import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from '../context'
import axios from 'axios'

const apiKey = 'd5cb87e716a91af3a28e40e73bb74a37'

class Form extends Component{
	state = {
    	zipLocation: ''
  	}

    onChange = (e) => {
        this.setState({
            zipLocation : e.target.value
        })
    }

   getWeather = (dispatch, e) =>{
      e.preventDefault()
       const zip = e.target.elements.zipcode.value
       
       if(zip === ''){
          alert('Please Provide A Zipcode')
       }else {
          axios.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`)
          .then(res => {
            console.log(res.data)
            dispatch({
              type: 'FIND_ZIPCODE',
              payload: res.data
            })
          }).catch(err => console.log(err))
       }
              
    }

  
 
	

	render(){

		return(
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <div className="container" >
              <form className="md-form mt-4"onSubmit={this.getWeather.bind(this, dispatch)} style={{display: 'flex'}}>
                <input className='form-control' 
                        type="text" 
                        name="zipcode" 
                        placeholder="Your Zipcode..."
                        onChange={this.onChange.bind(this)} />  
                        <br/>
                <Link to={`/info/${this.state.zipLocation}`}><button className="btn btn-warning ml-1"  style={{width: 100 + '%'}} type="submit">Search</button></Link>
              </form>
            </div>
          )
        }}
      </Consumer>
		)
	}
}

export default Form