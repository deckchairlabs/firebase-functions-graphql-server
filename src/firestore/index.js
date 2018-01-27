import { attachDirectiveResolvers } from 'graphql-tools'
import createDirectives from './createDirectives'

export default firestore => schema => {
  attachDirectiveResolvers(schema, createDirectives(firestore))

  return schema
}
