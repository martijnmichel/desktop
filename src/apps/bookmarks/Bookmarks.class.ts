import Window from 'src/classes/Window';
import BookmarksApp from 'src/apps/bookmarks/Bookmarks.vue';
export default class Bookmarks extends Window {
  public root?: string = '/';
  public title = 'Bookie';
  public component = BookmarksApp;

  public static app = 'bookmarks';
  public static icon?: string =
    'https://img.icons8.com/color/48/000000/bookmark-ribbon.png';
  public constructor(data: object) {
    super(data);
    console.log(this);
  }
}
