import Window from 'src/classes/Window';
import BookmarksApp from 'src/apps/bookmarks/Bookmarks.vue';
import { MenuEntryInterface } from 'src/interfaces/Window';
import store from 'src/store';
import { AppInterface } from 'src/interfaces/App';
import { LocalStorage } from 'quasar';
export default class Bookmarks extends Window implements AppInterface {
  public static title = 'Bookie';
  public component = BookmarksApp;
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
    console.log(this);
    store.commit('wm/addWindow', this);
  }
}
