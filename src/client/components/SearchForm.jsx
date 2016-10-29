import React from 'react'

export default React.createClass({
  props: {
    onSchoolChange: React.PropTypes.func.isRequired,
    onHigherLevelChange: React.PropTypes.func.isRequired,
    onRitualChange: React.PropTypes.func.isRequired
  },
  render () {
  return (
    <div className="search-form">
      <div className="school-filter">School
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
      
      <div className="higher-levels-filter">
        <input type="checkbox"
               name="higher_levels"
               onChange={evt => this.props.onHigherLevelChange(evt.target.checked)}/> Only spells which scales at higher level<br />
      </div>
      <div>
        <input type="checkbox"
               name="ritual"
               onChange={evt => this.props.onRitualChange(evt.target.checked)}/> Only spells which can be cast as aritual<br />

      </div>
    </div>
  )
  }
})
