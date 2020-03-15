import Window from 'src/classes/Window';
import ExplorerApp from 'src/apps/explorer/Explorer.vue';
export default class Explorer extends Window {
  public root?: string = '/';
  public title = 'Explorer';
  public component = ExplorerApp;

  public static app = 'explorer';
  public static icon?: string =
    'https://img.icons8.com/color/96/000000/opened-folder.png';

  public constructor(data: object) {
    super(data);
    console.log(this);
  }
}
