import { DisplayManagerState } from './interface';
export function updateSettings(state: DisplayManagerState, settings: object) {
  Object.assign(state.settings, settings);
}
