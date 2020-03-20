import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const fb = firebase.firestore();
const uid = firebase.auth().currentUser?.uid;
export default async function db(type, args) {
  let bookmarks;
  switch (type) {
    case 'ADD:BOOKMARK':
      return fb
        .doc(`users/${uid}/apps/bookie/`)
        .set({ bookmarks: args }, { merge: true });
    case 'GET:BOOKMARKS':
      await fb
        .doc(`users/${uid}/apps/bookie/`)
        .get()
        .then(data => {
          bookmarks = data.data();
          console.log(bookmarks);
        });
      return bookmarks;
  }
}
