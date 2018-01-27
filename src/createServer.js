import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import graphqlFirestore from './firestore'
import createServer from 'deckchair-graphql-server'

export default ({ firestore, schemaPath, endpoint }) => {
  const typeDefs = importSchema(schemaPath)
  const schema = graphqlFirestore(firestore)(makeExecutableSchema({ typeDefs }))

  const server = createServer({
    schema,
    endpoint,
    context: { firestore }
  })

  return server
}
