import _ from 'lodash'
import React, { Component } from 'react';
import './App.css';
import GitHub from './components/GitHub'
import Search from './components/Search'



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
      <div className="App container">
        <header>
          <h1>Trine tryin' to find members in Github organizations</h1>
        </header>
        <section>
        <Search onSearchTermChange={GithubResults} />
        <GitHub results={this.state.results} />
        </section>
      </div>
    )
  }
}

export default App;
