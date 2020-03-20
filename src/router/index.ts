import { HasSsrBootParams, HasStoreBootParams } from 'quasar';
import { VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import { StoreInterface } from '../store';
import routes from './routes';
import firebase from 'firebase/app';
import 'firebase/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

type RouterBootParams = {
  Vue: VueConstructor;
} & HasSsrBootParams &
  HasStoreBootParams<StoreInterface>;

export default function({ Vue }: RouterBootParams) {
  Vue.use(VueRouter);

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach((to, from, next) => {
    if (!firebase.auth().currentUser && !['/auth', '/load'].includes(to.path))
      next('/auth');
    else next();
  });

  return Router;
}
