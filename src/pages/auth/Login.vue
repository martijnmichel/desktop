<template>
  <q-page id="login" class="flex flex-center justify-evenly">
    <div class="column q-col-gutter-xs">
      <div class="col-12" v-if="!users">
        <q-input
          placeholder="email"
          v-model="state.email"
          outlined
          rounded
          bg-color="white"
          dense
        />
      </div>
      <div class="col-12 flex flex-center q-mb-lg" v-else>
        <q-btn
          flat
          @click="state.email = user.email"
          v-for="(user, index) in users"
          :key="index"
          stack
        >
          <q-avatar size="100px">
            <q-img :ratio="4 / 3" :src="user.icon || '/statics/bg1.jpeg'" />
          </q-avatar>
          {{ user.displayName || 'anony' }}
        </q-btn>
      </div>
      <div class="col-12">
        <q-input
          placeholder="password"
          type="password"
          v-model="state.password"
          outlined
          rounded
          bg-color="white"
          dense
        />
      </div>
      <div class="col-12 flex justify-end">
        <q-btn
          dense
          icon="chevron_right"
          round
          color="primary"
          @click="login()"
        />
      </div>
    </div>
  </q-page>
</template>

<style scoped>
#login {
  background: rgb(108, 108, 108);
  background: -moz-radial-gradient(
    circle,
    rgba(108, 108, 108, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(108, 108, 108, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(108, 108, 108, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6c6c6c",endColorstr="#505050",GradientType=1);
}
</style>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';

import firebase from 'firebase/app';
import 'firebase/auth';

export default defineComponent({
  name: 'Login',

  components: {},

  setup(props, ctx) {
    const state = reactive({
      email: '',
      password: ''
    });

    const users = ref(ctx.root.$q.localStorage.getItem('desktop:users'));

    interface E {
      code: string;
    }

    function login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password)
        .catch((e: E) => {
          if (e.code === 'auth/user-not-found') {
            firebase
              .auth()
              .createUserWithEmailAndPassword(state.email, state.password);
          }
        });

      ctx.root.$router.push('/load');
    }
    return {
      state,
      login,
      users
    };
  }
});
</script>
