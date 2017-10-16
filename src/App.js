import _ from 'lodash'
import React, { Component } from 'react';
import './App.css';
import GitHub from './components/GitHub'
import Search from './components/Search'


// const API_KEY = 'e0b2af1e780fb4e13a7f833917c6235b618ab352'

/*
https://api.github.com/orgs/{organization}/members

*/

const urlforUsername = term => 
// `https://api.github.com/users/${term}`
`https://api.github.com/orgs/${term}/members`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: [],
      requestFailed: false
      
    }

    this.GithubResults('')
  }

  GithubResults(term) {
    console.log('the term is: ' + term)
    fetch(urlforUsername(term))
      .then(response => {
        if (!response.ok) {
          throw Error('Request failed')
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          results: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    const GithubResults = _.debounce((term) => { this.GithubResults(term) }, 300)
    return (
      <div className="App">
        <Search onSearchTermChange={GithubResults} />
        <GitHub results={this.state.results} />
      </div>
    )
  }
}

export default App;