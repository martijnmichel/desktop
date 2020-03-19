import { StoreInterface } from '..';
export function allSettings(state: StoreInterface['dm']) {
  return state.settings;
}

export function state(state: StoreInterface['dm']) {
  return state;
}

export function loaded(state: StoreInterface['dm']) {
  return state.loaded;
}
