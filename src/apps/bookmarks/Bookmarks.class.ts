import Window from 'src/classes/Window';
import BookmarksApp from 'src/apps/bookmarks/Bookmarks.vue';
import { MenuEntryInterface } from 'src/interfaces/Window';
import store from 'src/store';
import { BookieInterface } from './BookieTypings';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const fb = firebase.firestore();
const uid = firebase.auth().currentUser?.uid;
import { AppInterface } from 'src/interfaces/App';
export default class Bookmarks extends Window implements AppInterface {
  public static title = 'Bookie';
  public component = BookmarksApp;
  app = 'bookmarks';
  data = {} as BookieInterface['data'];
  routes = [
    {
      name: '',
      component: () => import('./pages/Bookie.vue')
    },
    {
      name: 'add:group',
      component: () => import('./pages/AddGroup.vue')
    },
    {
      name: 'add:bookmark',
      component: () => import('./pages/AddBookmark.vue')
    }
  ];
  menu = [
    {
      name: 'File',
      items: [
        {
          name: 'Add bookmark',
          action: () => {
            this.to('add:bookmark');
          }
        },
        {
          name: 'Add group',
          action: () => {
            this.to('add:group');
          }
        },
        'separator',
        {
          name: 'Close',
          action: () => {
            this.close(this);
          }
        }
      ]
    }
  ] as MenuEntryInterface[] | boolean;
  public static icon?: string =
    'https://img.icons8.com/color/48/000000/bookmark-ribbon.png';
  public constructor(data: AppInterface) {
    super(data);

    this.get('GET:BOOKMARKS');
    store.commit('wm/addWindow', this);
  }
  async get(type: string) {
    switch (type) {
      case 'GET:BOOKMARKS':
        await fb
          .doc(`users/${uid}/apps/bookie/`)
          .get()
          .then((data: QuerySnapshot<BookieInterface['data']>) => {
            this.data = data.data();
          });
    }
  }
}
