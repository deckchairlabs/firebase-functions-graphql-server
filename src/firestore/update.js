import get from './get'

export default firestore => (collection, id, data) =>
  firestore
    .collection(collection)
    .doc(id)
    .set(data)
    .then(() => {
      return get(firestore)(collection, id)
    })
