import get from './get'

export default firestore => (collection, data) =>
  firestore
    .collection(collection)
    .add(data)
    .then(({ id }) => get(firestore)(collection, id))
