import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Spells from './../components/Spells'

const SpellQuery = gql`query SpellSearch ($school: School, $higherLevels: Boolean, $ritual: Boolean, $spellClass: Class $name: String, $level: String) {
  spells (school: $school, class: $spellClass, higher_levels: $higherLevels, ritual: $ritual, name: $name, level: $level) {
  _id
  name
  level
  school
  casting_time
  range
  duration
  description
  ritual
  higher_levels
  classes
  components {
    material
    somatic
    verbal
    materials_needed
  	}
	}
}`

export default graphql(SpellQuery, {
  options: ({ school, higherLevels, ritual, spellClass, name, level }) => {
    return { variables: {
                school: school,
                spellClass: spellClass,
                higherLevels: higherLevels,
                ritual: ritual,
                name: name,
                level: level
              }
            }
  }
})(Spells)
