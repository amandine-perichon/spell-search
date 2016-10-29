import React from 'react'

export default React.createClass({
  props: {
    onSchoolChange: React.PropTypes.func.isRequired
  },
  render () {
  return (
    <div className="search-form">
      <div>Pick a school</div>
      <select onChange={evt => this.props.onSchoolChange(evt.target.value)}>
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
  )
  }
})
