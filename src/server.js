import express from 'express'
import { graphqlExpress } from 'apollo-server-express'
import playground from 'graphql-playground-middleware-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'

export default ({ schema }) => {
  const server = express()

  server.use(cors())
  server.use(compression())

  server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  server.use(
    '/playground',
    playground({ endpoint: '/heaps-good/us-central1/api/graphql' })
  )

  return server
}
