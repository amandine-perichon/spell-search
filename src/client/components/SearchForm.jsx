import React from 'react'

export default React.createClass({
  getInitialState () {
    return {
      school: null
    }
  },
  changeSchool (evt) {
    console.log(evt.target.value)
  },
  render () {
  return (
    <div className="search-form">
      <div>Pick a school</div>
      <select onChange={this.changeSchool}>
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
