import React from 'react'
import {render} from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import AppContainer from './containers/AppContainer'

const client = new ApolloClient()

document.addEventListener('DOMContentLoaded', () => {
  render( <ApolloProvider client={client}>
            <AppContainer />
          </ApolloProvider>,
    document.getElementById('app')
  )
})
