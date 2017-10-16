import React, { Component } from 'react'



class GitHub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            requestFailed: false
        }
    }

    render() {

        if (this.state.requestFailed) return <p>Something went wrong!</p>
        if (!this.props.results) return <p>Loading...</p>
        return (

            <div className="listUsers">
                {this.props.results.map(function (listval) {
                                       
                    return (
                        <div className="githubMember col-md-4" key={listval.login}>
                                                   
                                <div className="col-md-4 githubMember__avatar"><a target="_blank" href={listval.html_url}><img src={listval.avatar_url}/></a></div>
                                <div className="col-md-8 githubMember__name"><a target="_blank" href={listval.html_url}><h2>{listval.login}</h2></a></div>
                      
                        </div>
                    )
                })}

            </div>

        )
    }

}

export default GitHub