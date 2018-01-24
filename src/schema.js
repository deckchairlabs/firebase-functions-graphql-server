import fs from 'fs'
import path from 'path'
import { makeExecutableSchema } from 'graphql-tools'

export default () => {
  const typeDefs = fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  )

  const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`
    }
  }

  return makeExecutableSchema({ typeDefs, resolvers })
}
