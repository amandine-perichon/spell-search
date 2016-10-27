import React from 'react'

import Spell from './Spell'
import SearchForm from './SearchForm'

export default React.createClass({
  props: {
    loading: React.PropTypes.bool.isRequired,
    spells: React.PropTypes.array.isRequired
  },
  render () {
    const spellList= this.props.spells? this.props.spells.map(elem => <Spell key={elem._id} spell={elem} />): null
    return (
          <div className="spell-list">
            {this.props.loading ? <div className="loader"></div> : spellList}
          </div>
    )
  }
})
