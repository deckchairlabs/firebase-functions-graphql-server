import get from './get'

export default firestore => (collection, id) => {
  const ref = firestore.collection(collection).doc(id)

  return get(firestore)(collection, id).then(doc =>
    ref.delete().then(() => {
      return doc
    })
  )
}
