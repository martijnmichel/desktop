<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';
import store from 'src/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import _ from 'lodash';
export default defineComponent({
  name: 'App',
  setup(props, context) {
    firebase.auth().onAuthStateChanged(async (user: firebase.User | null) => {
      if (user) {
        store.commit('user/init', user);

        /**
         * SAVE USER TO LOCALSTORAGE
         */

        let users: object[] | null = context.root.$q.localStorage.getItem(
          'desktop:users'
        );
        const u = {
          email: user.email,
          displayName: user.displayName
        };
        if (users) {
          const exist = _.find(
            users,
            (u: { email: string; displayName: string | undefined }) =>
              u.email === user.email
          );
          if (!exist) {
            users.push(u);
          }
        } else {
          users = [];
          users.push(u);
        }

        context.root.$q.localStorage.set('desktop:users', users);

        /**
         * GET FIREBASE DATA
         */

        await firebase
          .firestore()
          .doc(`users/${user.uid}`)
          .get()
          .then((snap: firebase.firestore.DocumentData) => {
            if (snap.exists) {
              store.commit('wm/init', snap.data().wm);
              store.commit('dm/init', snap.data().dm);
            } else {
              firebase
                .firestore()
                .doc(`users/${user.uid}`)
                .set({
                  displayName: user.displayName
                });
            }
          });

        store.commit('dm/loaded');

        watch(() => {
          if (!store.getters['user/isLoggedIn'] || !store.getters['dm/loaded'])
            return false;
          firebase
            .firestore()
            .doc(`users/${user.uid}`)
            .update({
              wm: { settings: store.getters['wm/allSettings'] },
              dm: { settings: store.getters['dm/allSettings'] }
            });
        });
      }
    });
  }
});
</script>
