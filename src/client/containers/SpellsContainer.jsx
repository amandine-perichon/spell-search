import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Spells from './../components/Spells'

const SpellQuery = gql`query SpellSearch ($school: school, $higherLevels: Boolean, $ritual: Boolean) {
  spells (school: $school, higher_levels: $higherLevels, ritual: $ritual) {
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
  options: ({ school, higherLevels, ritual }) => ({ variables: {school: school, higherLevels: higherLevels, ritual: ritual}})
})(Spells)
