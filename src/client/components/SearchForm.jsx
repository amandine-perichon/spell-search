import React from 'react'
import debounce from 'lodash.debounce'

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
    onCastingChange: React.PropTypes.func.isRequired,
    onDescriptionChange: React.PropTypes.func.isRequired,
    onComponentChange: React.PropTypes.func.isRequired
  },
  componentWillMount () {
     this.delayedOnChangeName = debounce((evt) => {
       this.props.onNameChange(evt.target.value)
     }, 500)

     this.delayedOnChangeDescription = debounce((evt) => {
       this.props.onDescriptionChange(evt.target.value)
     }, 500)
  },
  onChangeName(evt) {
    evt.persist()
    this.delayedOnChangeName(evt)
  },
  onChangeDescription(evt) {
    evt.persist()
    this.delayedOnChangeDescription(evt)
  },
  render () {
    return (
    <div className="search-form">
      <div className="free-text-filters">
        <div className="name-filter">
          <label htmlFor="name">Name </label>
          <input type="text"
                 name="name"
                 onChange={this.onChangeName} />
        </div>
        <div className="description-filter">
          <label htmlFor="description">Description </label>
          <input type="text"
                 name="description"
                 onChange={this.onChangeDescription} />
        </div>
      </div>
      <div className="drop-down-filters">
        <div className="level-filter">
          <select defaultValue="all" onChange={evt => this.props.onLevelChange(evt.target.value)}>
            <option value="all">All levels</option>
            <option value="cantrip">Cantrip</option>
            <option value="1">level 1</option>
            <option value="2">level 2</option>
            <option value="3">level 3</option>
            <option value="4">level 4</option>
            <option value="5">level 5</option>
            <option value="6">level 6</option>
            <option value="7">level 7</option>
            <option value="8">level 8</option>
            <option value="9">level 9</option>
          </select>
        </div>
        <div className="school-filter">
          <select defaultValue="all" onChange={evt => this.props.onSchoolChange(evt.target.value)}>
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
        <div className="class-filter">
          <select defaultValue="all" onChange={evt => this.props.onClassChange(evt.target.value)}>
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
        <div className="duration-filter">
          <select defaultValue="all" onChange={evt => this.props.onDurationChange(evt.target.value)}>
            <option value="all">All durations</option>
            <option value="instantaneous">Instantaneous</option>
            <option value="hour">Hours</option>
            <option value="minute">Minutes</option>
            <option value="day">Days</option>
            <option value="round">Rounds</option>
          </select>
        </div>
        <div className="range-filter">
          <select defaultValue="all" onChange={evt => this.props.onRangeChange(evt.target.value)}>
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
          <select defaultValue="all" onChange={evt => this.props.onCastingChange(evt.target.value)}>
            <option value="all">All casting times</option>
            <option value="bonus">Bonus</option>
            <option value="reaction">Reaction</option>
            <option value="action">Action</option>
            <option value="minute">Minutes</option>
          </select>
        </div>
        <div className="component-filter">
          <select defaultValue="all" onChange={evt => this.props.onComponentChange(evt.target.value)}>
            <option value="all">All components</option>
            <option value="verbal">Exclude verbal</option>
            <option value="somatic">Exclude somatic</option>
            <option value="material">Exclude material</option>
          </select>
        </div>
      </div>
      <div className="checkbox-filters">
        <div className="higher-levels-filter">
          <input type="checkbox"
                 name="higher_levels"
                 onChange={evt => this.props.onHigherLevelChange(evt.target.checked)}/> Higher level description only
        </div>
        <div className="ritual-filter">
          <input type="checkbox"
                 name="ritual"
                 onChange={evt => this.props.onRitualChange(evt.target.checked)}/> Ritual only

        </div>
        <div className="concentration-filter">
          <input type="checkbox"
               name="concentration"
               onChange={evt => this.props.onConcentrationChange(evt.target.checked)}/> Concentration only
        </div>
      </div>
    </div>
  )
  }
})
