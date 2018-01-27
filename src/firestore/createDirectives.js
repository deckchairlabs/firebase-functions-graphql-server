import list from './list'
import get from './get'
import add from './add'
import update from './update'
import remove from './remove'

const checkOperationEquals = (operation, expected) => {
  if (operation !== expected) {
    throw new Error('Directive must only be used on "query" operations.')
  }
}

export default firestore => ({
  firestoreList(resolver, source, args, context, info) {
    checkOperationEquals(info.operation.operation, 'query')
    return list(firestore)(args.collection)
  },

  firestoreGet(resolver, source, args, context, info) {
    checkOperationEquals(info.operation.operation, 'query')

    const collection = args.collection
    const id = info.variableValues['id']

    return get(firestore)(collection, id)
  },

  firestoreAdd(resolver, source, args, context, info) {
    checkOperationEquals(info.operation.operation, 'mutation')

    const collection = args.collection
    const inputVariable = args.inputVariable || 'input'

    return add(firestore)(collection, info.variableValues[inputVariable])
  },

  firestoreUpdate(resolver, source, args, context, info) {
    checkOperationEquals(info.operation.operation, 'mutation')

    const collection = args.collection
    const id = info.variableValues['id']
    const inputVariable = args.inputVariable || 'input'

    return update(firestore)(collection, id, info.variableValues[inputVariable])
  },

  firestoreDelete(resolver, source, args, context, info) {
    checkOperationEquals(info.operation.operation, 'mutation')

    const collection = args.collection
    const id = info.variableValues['id']

    return remove(firestore)(collection, id)
  }
})
