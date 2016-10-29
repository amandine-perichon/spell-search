import React from 'react'

export default React.createClass({
  props: {
    spell: React.PropTypes.object.isRequired
  },
  render () {
    const spell = this.props.spell
    return (
      <div className="row spell">
        <div className="spell-heading">
          <div className="spell-name">{spell.name}</div>
          <div className="spell-type">level {spell.level} - {spell.school}</div>
        </div>
        <div className="row spell-stats">
          <div className="one-third column">
            <div>Casting time: {spell.casting_time}</div>
            <div>Range: {spell.range}</div>
            <div>Duration: {spell.duration}</div>
            <div>{spell.ritual? `Ritual: ${spell.ritual}`: null}</div>
          </div>
          <div className="one-third column">
            <div>Classes: {spell.classes.map((elem) => <span key={elem}>{elem} </span>)}</div>
          </div>
          <div className="one-third column">
            <div>Components:
              <div>V: {spell.components && spell.components.verbal? "Yes": "No"}</div>
              <div>S: {spell.components && spell.components.somatic? "Yes": "No"}</div>
              <div>M: {spell.components && spell.components.material? "Yes": "No"}</div>
              {spell.components && spell.components.material?
                <div>{`materials: ${spell.components.materials_needed}`}</div>: null}
            </div>
          </div>
        </div>
        <div className="row spell-description">
          <div><strong>Description</strong>: {spell.description}</div>
          {spell.higher_levels? <div><strong>Higher Levels</strong>: {spell.higher_levels}</div>: null}
        </div>
      </div>
    )
  }
})
