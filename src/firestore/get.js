export default firestore => (collection, id) =>
  firestore
    .collection(collection)
    .doc(id)
    .get()
    .then(doc => ({ id, ...doc.data() }))
