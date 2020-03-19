import { State } from 'src/store/wm/interface';
import { AppInterface } from 'src/interfaces/App';
export function allWindows(state: State) {
  return state.windows;
}
export function allSettings(state: State) {
  return state.settings;
}
export function activeWindow(state: State) {
  return state.windows.find((w: AppInterface) => w.active === true);
}
