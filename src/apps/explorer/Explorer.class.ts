import Window from 'src/classes/Window';
import ExplorerApp from 'src/apps/explorer/Explorer.vue';
import store from 'src/store';
import { WindowInterface } from 'src/interfaces/Window';
export default class Explorer extends Window {
  public root?: string = '/';
  public static title = 'Explorer';
  public component = ExplorerApp;

  public static app = 'explorer';
  public static icon?: string =
    'https://img.icons8.com/color/96/000000/opened-folder.png';

  public constructor(data: WindowInterface) {
    super(data);
    console.log(this);
    store.commit('wm/addWindow', this);
  }
}
