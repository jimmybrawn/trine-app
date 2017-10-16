import React, { Component } from 'react'

  

class GitHub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false
        }
    }
    
    render(){

        if(this.state.requestFailed) return <p>Something went wrong!</p>
        if (!this.props.results) return <p>Loading...</p>
        return (

            <ul>
            {this.props.results.map(function(listval){
                return <li key={listval.login}>{listval.login}</li>
            })}
                          
            </ul>
            
        )
    }

}

export default GitHub