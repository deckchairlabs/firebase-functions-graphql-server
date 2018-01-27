import path from 'path'
import Firestore from '@google-cloud/firestore'
import createServer from './src/createServer'

const firestore = new Firestore({
  projectId: 'heaps-good',
  keyFilename: path.resolve(__dirname, 'serviceAccount.json')
})

const server = createServer({
  firestore,
  schemaPath: path.resolve(__dirname, 'src', 'schema.graphql')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
)
