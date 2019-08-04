import React from 'react'
import axios from 'axios'
import PresetItem from './PresetItem'
import { Consumer } from '../context'

const Preset = () => {
    return(
        <Consumer> 
            {value => {
                const {cityList, heading} = value
                return(
                    <React.Fragment>
                        <div className="container" style={{display: 'flex', flexWrap: 'wrap'}}> 
                            {cityList.map(item => (
                                <PresetItem key={item.name} cityName={item.name} lon={item.lon} lat={item.lat}/>
                            ))}
                        </div>
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
}

export default Preset