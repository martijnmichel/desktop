import Window from 'src/classes/Window';
import SettingsApp from 'src/apps/settings/Settings.vue';
import store from 'src/store';
import { WindowInterface } from 'src/interfaces/Window';
export default class Settings extends Window {
  public root?: string = '/';
  public static title = 'Settings';
  public component = SettingsApp;
  public menu = false;
  public preventMultiple = true;

  public static app = 'settings';
  public static icon?: string =
    'https://img.icons8.com/color/100/000000/sorting-options.png';

  public constructor(data: WindowInterface) {
    super(data);
    console.log(this);
    store.commit('wm/addWindow', this);
  }
}
