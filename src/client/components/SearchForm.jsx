import React from 'react'

export default React.createClass({
  props: {
    onSchoolChange: React.PropTypes.func.isRequired,
    onHigherLevelChange: React.PropTypes.func.isRequired,
    onRitualChange: React.PropTypes.func.isRequired,
    onClassChange: React.PropTypes.func.isRequired,
    onNameChange: React.PropTypes.func.isRequired,
    onLevelChange: React.PropTypes.func.isRequired,
    onDurationChange: React.PropTypes.func.isRequired,
    onConcentrationChange: React.PropTypes.func.isRequired,
    onRangeChange: React.PropTypes.func.isRequired,
    onCastingChange: React.PropTypes.func.isRequired
  },
  render () {
  return (
    <div className="search-form">
      <div className="name-filter">
        <label htmlFor="name">Name </label>
        <input type="text"
               name="name"
               onChange={evt => this.props.onNameChange(evt.target.value)} />
      </div>
      <div className="level-filter">
        <label htmlFor="level">Level </label>
        <input type="text"
               name="level"
               onChange={evt => this.props.onLevelChange(evt.target.value)} />
      </div>
      <div className="school-filter">School <br />
        <select onChange={evt => this.props.onSchoolChange(evt.target.value)}>
          <option value="all">All schools</option>
          <option value="abjuration">Abjuration</option>
          <option value="conjuration">Conjuration</option>
          <option value="divination">Divination</option>
          <option value="enchantment">Enchantment</option>
          <option value="evocation">Evocation</option>
          <option value="illusion">Illusion</option>
          <option value="necromancy">Necromancy</option>
          <option value="transmutation">Transmutation</option>
        </select>
      </div>
      <div className="class-filter">Class <br />
        <select onChange={evt => this.props.onClassChange(evt.target.value)}>
          <option value="all">All classes</option>
          <option value="bard">Bard</option>
          <option value="cleric">Cleric</option>
          <option value="druid">Druid</option>
          <option value="paladin">Paladin</option>
          <option value="ranger">Ranger</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="warlock">Warlock</option>
          <option value="wizard">Wizard</option>
        </select>
      </div>
      <div className="higher-levels-filter">
        <input type="checkbox"
               name="higher_levels"
               onChange={evt => this.props.onHigherLevelChange(evt.target.checked)}/> Only spells which scales at higher level<br />
      </div>
      <div>
        <input type="checkbox"
               name="ritual"
               onChange={evt => this.props.onRitualChange(evt.target.checked)}/> Ritual only<br />

      </div>
      <div className="duration-filter">
        <select onChange={evt => this.props.onDurationChange(evt.target.value)}>
          <option value="all">All durations</option>
          <option value="instantaneous">Instantaneous</option>
          <option value="hour">Hours</option>
          <option value="minute">Minutes</option>
          <option value="day">Days</option>
          <option value="round">Rounds</option>
        </select><br />
        <input type="checkbox"
               name="concentration"
               onChange={evt => this.props.onConcentrationChange(evt.target.checked)}/> Concentration only<br />
      </div>
      <div className="range-filter">
        <select onChange={evt => this.props.onRangeChange(evt.target.value)}>
          <option value="all">All ranges</option>
          <option value="touch">Touch</option>
          <option value="self">Self</option>
          <option value="sight">Sight</option>
          <option value="300 feet">300 feet</option>
          <option value="150 feet">150 feet</option>
          <option value="120 feet">120 feet</option>
          <option value="90 feet">90 feet</option>
          <option value="60 feet">60 feet</option>
          <option value="30 feet">30 feet</option>
          <option value="10 feet">10 feet</option>
        </select>
      </div>
      <div className="casting-time-filter">
        <select onChange={evt => this.props.onCastingChange(evt.target.value)}>
          <option value="all">All casting times</option>
          <option value="bonus">Bonus</option>
          <option value="reaction">Reaction</option>
          <option value="action">Action</option>
          <option value="minute">Minutes</option>
        </select>
      </div>
    </div>
  )
  }
})

// components
// description
