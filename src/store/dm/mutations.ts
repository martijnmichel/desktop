import { DisplayManagerState } from './interface';
import { StoreInterface } from 'src/store';
import Vue from 'vue';

export function init(state: DisplayManagerState, event: StoreInterface['dm']) {
  console.log(state);
  Vue.set(state, 'settings', event.settings);
}

export function loaded(state: DisplayManagerState) {
  Vue.set(state, 'loaded', true);
}

export function clean(state: DisplayManagerState) {
  Vue.set(state, 'settings', {});
  Vue.set(state, 'loaded', false);
}

export function updateSettings(state: DisplayManagerState, settings: object) {
  Object.assign(state.settings, settings);
}
