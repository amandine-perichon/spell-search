import React from 'react'

export default React.createClass({
  props: {
    spell: React.PropTypes.object.isRequired
  },
  render () {
    const spell = this.props.spell
    let componentsArr = []
    if (spell.components) {
      if (spell.components.verbal) { componentsArr.push("V")}
      if (spell.components.somatic) { componentsArr.push("S")}
      if (spell.components.material) { componentsArr.push("M")}
      var componentDescription = componentsArr.join(", ")
    }
    return (
      <div className="spell">
        <div className="name">{spell.name}</div>
        <div className="type">level {spell.level} - {spell.school} {spell.ritual? "(ritual)": null}</div>
        <div className="stats">
          <div className="stat-block top left">
            <div className="title">casting time</div>
            <div className="content">{spell.casting_time}</div>
          </div>
          <div className="stat-block top right">
            <div className="title">range</div>
            <div className="content">{spell.range}</div>
          </div>
          <div className="stat-block bottom left">
            <div className="title">components</div>
            <div className="content">{spell.components? componentDescription : "-"}</div>
          </div>
          <div className="stat-block bottom right">
            <div className="title">duration</div>
            <div className="content">{spell.duration}</div>
          </div>
        </div>
        <div className={`description ${!spell.higher_levels? "rounded": ""}`}>
          {spell.components && spell.components.material? <div className="material">Materials: {spell.components.materials_needed}</div>: null}
          {spell.description}
        </div>
        {spell.higher_levels? <div className="higher-levels-title">At Higher Levels</div>: null}
        {spell.higher_levels? <div className="higher-levels">{spell.higher_levels}</div>: null}
        <div className="classes">{spell.classes.map((elem) => <span key={elem}>{elem} </span>)}</div>
      </div>
    )
  }
})
