import React, { Component } from 'react'
import loading from "./loading.gif"

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
               <img style={{width: '35px'}} src={loading} alt="loading image" /> 
            </div>
        )
    }
}

export default Spinner;
