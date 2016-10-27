import React from 'react'

import Spells from './Spells'
import SearchForm from './SearchForm'

export default React.createClass({
  props: {
    data: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div>
        <header>
          <h1>Search for spells</h1>
        </header>
        <div className="container">
          <SearchForm />
          <Spells loading={this.props.data.loading} spells={this.props.data.spells}/>
        </div>
        <footer>Work in progress...</footer>
      </div>
    )
  }
})
