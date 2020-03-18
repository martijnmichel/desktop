<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted } from '@vue/composition-api';
import store from 'src/store';
export default defineComponent({
  name: 'App',
  setup(props, context) {
    onMounted(() => {
      const state = context.root.$q.localStorage.getItem('desktop:state');
      if (state) store.commit('wm/init', state);
      if (state) store.commit('dm/init', state);
    });
    watch(() => {
      context.root.$q.localStorage.set('desktop:state', store.state);
    });
  }
});
</script>
