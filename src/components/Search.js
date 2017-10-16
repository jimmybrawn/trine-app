import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { term: 'Starting value' }
    }

    render() {
        return (
            <div className="Search">
                <input onChange={e => this.onInputChange(e.target.value)}
                    placeholder="Search here" />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }

}

export default Search