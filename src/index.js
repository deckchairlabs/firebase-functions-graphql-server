import { https } from 'firebase-functions'
import createServer from './server'
import createSchema from './schema'

const schema = createSchema()
const server = createServer({ schema })

export const api = https.onRequest(server)
