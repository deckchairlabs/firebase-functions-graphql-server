import fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'

export default schemaPath => {
  const typeDefs = fs.readFileSync(schemaPath, 'utf8')

  const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`
    }
  }

  return makeExecutableSchema({ typeDefs, resolvers })
}
