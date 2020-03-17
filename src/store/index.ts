import { HasSsrBootParams } from 'quasar';
import { VueConstructor } from 'vue';
import Vuex from 'vuex';
import Vue from 'vue';

import { AppInterface } from 'src/interfaces/App';

import wm from './wm';
import dm from './dm';

// import example from './module-example'
// import exampleState from './module-example/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

type StoreBootParams = {
  Vue: VueConstructor;
} & HasSsrBootParams;

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  // example: typeof exampleState;
  wm: {
    windows: AppInterface[];
    settings: {
      transitions: {
        enter: string;
        leave: string;
      };
    };
  };
  dm: {
    settings: {
      background: string;
    };
  };
}

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    // example
    wm,
    dm
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: !!process.env.DEV
});

export default Store;
