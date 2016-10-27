import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import App from './../components/App'

const SpellQuery = gql`query {
  spells {
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

export default graphql(SpellQuery)(App)
