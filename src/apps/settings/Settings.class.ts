import Window from 'src/classes/Window';
import SettingsApp from 'src/apps/settings/Settings.vue';
import store from 'src/store';
import { AppInterface } from 'src/interfaces/App';
export default class Settings extends Window implements AppInterface {
  static title = 'Settings';
  public component = SettingsApp;
  public menu = false;
  public preventMultiple = true;

  public static app = 'settings';
  public static icon?: string =
    'https://img.icons8.com/color/100/000000/sorting-options.png';

  public constructor(data: AppInterface) {
    super(data);
    console.log(this);
    store.commit('wm/addWindow', this);
  }
}
