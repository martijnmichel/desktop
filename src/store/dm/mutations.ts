import { DisplayManagerState } from './interface';
import { StoreInterface } from 'src/store';
import Vue from 'vue';

export function init(state: DisplayManagerState, event: StoreInterface) {
  console.log(state);
  Vue.set(state, 'settings', event.dm.settings);
}

export function updateSettings(state: DisplayManagerState, settings: object) {
  Object.assign(state.settings, settings);
}
