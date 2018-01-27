export default firestore => collection =>
  firestore
    .collection(collection)
    .get()
    .then(snapshot => {
      const documents = []
      snapshot.forEach(doc => documents.push({ id: doc.id, ...doc.data() }))
      return documents
    })
