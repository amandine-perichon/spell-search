import React from 'react'

import SpellsContainer from './../containers/SpellsContainer'
import SearchForm from './SearchForm'

export default React.createClass({
  getInitialState () {
    return {
      school: null,
      higherLevels: null,
      ritual: null
    }
  },
  onSchoolChange (school) {
    this.setState({school: school!=="all" ? school : null})
  },
  onHigherLevelChange (higherLevels) {
    this.setState({higherLevels: higherLevels})
  },
  onRitualChange (ritual) {
    this.setState({ritual: ritual})
  },
  render () {
    return (
      <div>
        <header>
          <h1>Search for spells</h1>
        </header>
        <div className="container">
          <SearchForm onSchoolChange={this.onSchoolChange}
                      onHigherLevelChange={this.onHigherLevelChange}
                      onRitualChange={this.onRitualChange}
                      />
          <SpellsContainer school={this.state.school}
                           higherLevels={this.state.higherLevels}
                           ritual={this.state.ritual}
                           />
        </div>
        <footer>Work in progress... on Github: https://github.com/amandine-perichon/spell-search</footer>
      </div>
    )
  }
})
