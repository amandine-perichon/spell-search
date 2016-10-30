import React from 'react'

import SpellsContainer from './../containers/SpellsContainer'
import SearchForm from './SearchForm'

export default React.createClass({
  getInitialState () {
    return {
      school: null,
      level: null,
      higherLevels: null,
      ritual: null,
      spellClass: null,
      name: null,
      state: null,
      duration: null,
      concentration: null,
      range: null,
      castingTime: null,
      description: null,
      componentType: null,
      lastFormReset: new Date()
    }
  },
  onSchoolChange (school) {
    this.setState({school: school!=="all" ? school : null})
  },
  onHigherLevelChange (higherLevels) {
    this.setState({higherLevels: higherLevels? higherLevels: null})
  },
  onRitualChange (ritual) {
    this.setState({ritual: ritual? ritual: null})
  },
  onClassChange (spellClass) {
    this.setState({spellClass: spellClass!=="all" ? spellClass : null})
  },
  onNameChange (name) {
    this.setState({name: name!=="" ? name : null})
  },
  onLevelChange (level) {
    this.setState({level: level!=="all" ? level : null})
  },
  onDurationChange (duration) {
    this.setState({duration: duration!=="all" ? duration : null})
  },
  onConcentrationChange (concentration) {
    this.setState({concentration: concentration? concentration: null})
  },
  onRangeChange (range) {
    this.setState({range: range!=="all" ? range : null})
  },
  onCastingChange (castingTime) {
    this.setState({castingTime: castingTime!=="all" ? castingTime : null})
  },
  onDescriptionChange (description) {
    this.setState({description: description!=="" ? description : null})
  },
  onComponentChange (componentType) {
    this.setState({componentType: componentType!=="all" ? componentType : null})
  },
  resetSearch () {
    // TO DO RESET FORM
    this.setState({
      school: null,
      level: null,
      higherLevels: null,
      ritual: null,
      spellClass: null,
      name: null,
      state: null,
      duration: null,
      concentration: null,
      range: null,
      castingTime: null,
      description: null,
      componentType: null,
      lastFormReset: new Date()
    })
  },
  render () {
    return (
      <div className="app">
        <header>
          <h1>Search for spells</h1>
        </header>
        <div className="app-container">
            <SearchForm key={this.state.lastFormReset}
                      onSchoolChange={this.onSchoolChange}
                      onHigherLevelChange={this.onHigherLevelChange}
                      onRitualChange={this.onRitualChange}
                      onClassChange={this.onClassChange}
                      onNameChange={this.onNameChange}
                      onLevelChange={this.onLevelChange}
                      onDurationChange={this.onDurationChange}
                      onConcentrationChange={this.onConcentrationChange}
                      onRangeChange={this.onRangeChange}
                      onCastingChange={this.onCastingChange}
                      onDescriptionChange={this.onDescriptionChange}
                      onComponentChange={this.onComponentChange}
                      resetSearch={this.resetSearch}
                      />
          <SpellsContainer school={this.state.school}
                           spellClass={this.state.spellClass}
                           higherLevels={this.state.higherLevels}
                           ritual={this.state.ritual}
                           name={this.state.name}
                           level={this.state.level}
                           duration={this.state.duration}
                           concentration={this.state.concentration}
                           range={this.state.range}
                           castingTime={this.state.castingTime}
                           description={this.state.description}
                           componentType={this.state.componentType}
                           />
        </div>
        <footer>Work in progress... on Github: https://github.com/amandine-perichon/spell-search</footer>
      </div>
    )
  }
})
