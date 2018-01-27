import path from 'path'
import { https } from 'firebase-functions'
import Firestore from '@google-cloud/firestore'
import createServer from './createServer'

const firestore = new Firestore()

const server = createServer({
  firestore,
  schemaPath: path.resolve(__dirname, 'schema.graphql'),
  endpoint: '/api/graphql'
})

export const api = https.onRequest(server)
