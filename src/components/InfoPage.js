import React, { Component } from 'react'
import axios from 'axios'

class InfoPage extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="container border border-success p-4" style={{ marginTop: 2 + 'em' }}>
                    <div className="card" style={{width: 100 + '%',}}>
                        
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span>Temperature</span>: 100</li>
                        </ul>
                        <div className="card-body">
                            <a href="/info" className="card-link">Card link</a>
                            <a href="/info" className="card-link">Another link</a>
                        </div>
                    </div> 
                </div>    
            </React.Fragment>
        )
    }
}

export default InfoPage

