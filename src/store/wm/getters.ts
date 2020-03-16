import { State } from 'src/store/wm/interface';
export function allWindows(state: State) {
  return state.windows;
}
export function allSettings(state: State) {
  return state.settings;
}
