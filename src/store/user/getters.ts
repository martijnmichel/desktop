import { StoreInterface } from 'src/store';

export function isLoggedIn(state: StoreInterface['user']) {
  return state.auth.uid ? true : false;
}
