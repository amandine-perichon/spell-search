import React from 'react'
import {render} from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'

const client = new ApolloClient()

document.addEventListener('DOMContentLoaded', () => {
  render( <ApolloProvider client={client}>
            <App />
          </ApolloProvider>,
    document.getElementById('app')
  )
})
