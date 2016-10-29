import React from 'react'

import SpellsContainer from './../containers/SpellsContainer'
import SearchForm from './SearchForm'

export default React.createClass({
  getInitialState () {
    return {
      school: ""
    }
  },
  onSchoolChange (school) {
    this.setState({school: school})
  },
  render () {
    return (
      <div>
        <header>
          <h1>Search for spells</h1>
        </header>
        <div className="container">
          <SearchForm onSchoolChange={this.onSchoolChange}/>
          <SpellsContainer school={this.state.school} />
        </div>
        <footer>Work in progress...</footer>
      </div>
    )
  }
})
