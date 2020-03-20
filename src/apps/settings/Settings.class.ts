import Window from 'src/classes/Window';
import SettingsApp from 'src/apps/settings/Settings.vue';
import { AppInterface } from 'src/interfaces/App';
import { wm } from 'src/bus/wm.bus';
export default class Settings extends Window implements AppInterface {
  static title = 'Settings';
  public component = SettingsApp;
  public menu = false;
  public preventMultiple = true;
  resizable = false;
  public static app = 'settings';
  public static icon?: string =
    'https://img.icons8.com/color/100/000000/sorting-options.png';

  public constructor(data: AppInterface) {
    super(data);
    wm.push(this);
  }
}
