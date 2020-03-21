import Window from 'src/classes/Window';
import BookmarksApp from 'src/apps/bookmarks/Bookmarks.vue';
import { MenuEntryInterface, RouteInterface } from 'src/interfaces/Window';
import { wm } from 'src/bus/wm.bus';
import { BookieInterface, BookieAppInterface } from './BookieTypings';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { LooseDictionary } from 'quasar';
const fb = firebase.firestore();
const uid = firebase.auth().currentUser?.uid;
import { AppInterface } from 'src/interfaces/App';
export default class Bookmarks extends Window implements BookieAppInterface {
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
  route = {
    params: {} as LooseDictionary,
    current: {
      name: '',
      component: () => import('./pages/Bookie.vue')
    } as RouteInterface,
    previous: {} as RouteInterface
  };
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
            this.close();
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
    wm.push(this);
  }
  to(name: string, params?: undefined | LooseDictionary) {
    const route = this.routes.find((r: RouteInterface) => r.name === name);
    if (!route) return false;
    this.route.previous = this.route.current;
    this.route.current = route;
    this.route.params = params || {};
  }
  async get(type: string) {
    switch (type) {
      case 'GET:BOOKMARKS':
        await fb
          .doc(`users/${uid}/apps/bookie/`)
          .get()
          .then(data => {
            if (!data) return false;
            this.data = data.data() || {};
          });
    }
  }
  async set(type: string, args: LooseDictionary) {
    switch (type) {
      case 'ADD:GROUP':
        return fb
          .doc(`users/${uid}/apps/bookie/`)
          .set({ groups: args }, { merge: true });
      case 'ADD:BOOKMARK':
        return fb.doc(`users/${uid}/apps/bookie/`).update({
          groups: {
            [args.index]: {
              bookmarks: args.bookmarks
            }
          }
        });
    }
  }
}
