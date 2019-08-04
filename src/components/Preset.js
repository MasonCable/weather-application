import React from 'react'
import axios from 'axios'
import PresetItem from './PresetItem'
import Form from './Form'
import { Consumer } from '../context'

const Preset = () => {
    return(
        <Consumer> 
            {value => {
                const {cityList, heading} = value
                return(
                    <React.Fragment>
                        <Form />
                        <div className="container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}> 
                            {cityList.map(item => (
                                <PresetItem key={item.name}
                                    cityName={item.name} 
                                    lon={item.lon} 
                                    lat={item.lat} 
                                    imgUrl={item.imgUrl}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
}

export default Preset