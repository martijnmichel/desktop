import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const fb = firebase.firestore();
const uid = firebase.auth().currentUser?.uid;
export default {
  async get(type: string) {
    let bookmarks;
    switch (type) {
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
  },

  async set(type: string, args: undefined | object) {
    switch (type) {
      case 'ADD:GROUP':
        return fb
          .doc(`users/${uid}/apps/bookie/`)
          .set({ groups: args }, { merge: true });
    }
  }
};
