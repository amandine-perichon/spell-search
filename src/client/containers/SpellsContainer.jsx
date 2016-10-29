import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Spells from './../components/Spells'

const SpellQuery = gql`query SpellSearch ($school: School, $higherLevels: Boolean, $ritual: Boolean, $spellClass: Class $name: String, $level: String, $duration: String, $concentration: Boolean, $range: String, $castingTime: String, $description: String) {
  spells (school: $school, class: $spellClass, higher_levels: $higherLevels, ritual: $ritual, name: $name, level: $level, duration: $duration, concentration: $concentration, range: $range, casting_time: $castingTime, description: $description) {
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
  options: ({ school, higherLevels, ritual, spellClass, name, level, duration, concentration, range, castingTime, description }) => {
    return { variables: {
                school: school,
                spellClass: spellClass,
                higherLevels: higherLevels,
                ritual: ritual,
                name: name,
                level: level,
                duration: duration,
                concentration: concentration,
                range: range,
                castingTime: castingTime,
                description: description
              }
            }
  }
})(Spells)
