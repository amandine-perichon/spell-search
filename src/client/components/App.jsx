import React from 'react'

import SpellsContainer from './../containers/SpellsContainer'
import SearchForm from './SearchForm'

export default React.createClass({
  getInitialState () {
    return {
      school: null,
      higherLevels: null,
      ritual: null,
      spellClass: null,
      name: null
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
  onClassChange (spellClass) {
    this.setState({spellClass: spellClass!=="all" ? spellClass : null})
  },
  onNameChange (name) {
    this.setState({name: name!=="" ? name : null})
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
                      onClassChange={this.onClassChange}
                      onNameChange={this.onNameChange}
                      />
          <SpellsContainer school={this.state.school}
                           spellClass={this.state.spellClass}
                           higherLevels={this.state.higherLevels}
                           ritual={this.state.ritual}
                           name={this.state.name}
                           />
        </div>
        <footer>Work in progress... on Github: https://github.com/amandine-perichon/spell-search</footer>
      </div>
    )
  }
})
