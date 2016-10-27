import React from 'react'

import Spell from './Spell'

export default React.createClass({
  render () {
    const spells = this.props.data.spells
    const spellList= spells? spells.map(elem => <Spell key={elem._id} spell={elem} />): null
    return (
      <div>
        <header>
          <h1>Search for spells</h1>
        </header>
        <div className="container">
          <div className="spell-list">{spellList? spellList: <div className="loader"></div>}</div>
        </div>
        <footer>Work in progress...</footer>
      </div>
    )
  }
})
