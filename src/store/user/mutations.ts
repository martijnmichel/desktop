import { StoreInterface } from 'src/store';
import Vue from 'vue';

export function init(state: StoreInterface['user'], user: firebase.User) {
  Vue.set(state.auth, 'uid', user.uid);
  Vue.set(state.auth, 'email', user.email);
}

export function remove(state: StoreInterface['user']) {
  Vue.set(state, 'auth', {});
}
