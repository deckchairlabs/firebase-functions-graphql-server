import path from 'path'
import { https } from 'firebase-functions'
import createServer from 'deckchair-graphql-server'
import createSchema from './schema'

const schema = createSchema(path.join(__dirname, 'schema.graphql'))
const server = createServer({
  schema,
  endpoint: '/heaps-good/us-central1/api/graphql'
})

export const api = https.onRequest(server)
