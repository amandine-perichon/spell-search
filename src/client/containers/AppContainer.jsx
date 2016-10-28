import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import App from './../components/App'

const SpellQuery = gql`query SpellSearch ($magicSchool: school) {
  spells (school: $magicSchool) {
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
  options: { variables: {magicSchool: "necromancy"}}
})(App)
