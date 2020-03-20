import Window from 'src/classes/Window';
import ExplorerApp from 'src/apps/explorer/Explorer.vue';
import { wm } from 'src/bus/wm.bus';
import { AppInterface } from 'src/interfaces/App';
export default class Explorer extends Window implements AppInterface {
  public root?: string = '/';
  public static title = 'Explorer';
  public component = ExplorerApp;
  public static app = 'explorer';
  menu = false;
  public static icon?: string =
    'https://img.icons8.com/color/96/000000/opened-folder.png';

  public constructor(data: AppInterface) {
    super(data);
    wm.push(this);
  }
}
