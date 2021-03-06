import React from 'react'

import Spell from './Spell'
import SearchForm from './SearchForm'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired,
  },
  render () {
    const spells = this.props.data.spells
    const loading = this.props.data.loading
    const spellList= spells? spells.map(elem => <Spell key={elem._id} spell={elem} />): null
    return (
          <div className="spells">
            {loading ? <div className="loader"></div> :
            <div>{spells? <div className="search-count">Your search returned {spells.length} results</div> : null}<div className="spell-list">{spellList}</div></div>}
          </div>
    )
  }
})
