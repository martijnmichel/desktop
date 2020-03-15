<template>
  <q-layout view="lHh Lpr lFf" id="main">
    <q-dialog
      v-model="state.bar"
      position="bottom"
      color="transparent"
      seamless
    >
      <div class="bottomNav">
        <blurred-bg color="rgba(0,0,0,0.6)" />
        <q-toolbar>
          <Dash />

          <template v-for="window in windows">
            <q-avatar rounded v-bind:key="window.id">
              <q-img :src="window.icon" />
            </q-avatar>
          </template>
        </q-toolbar>
      </div>
    </q-dialog>

    <q-page-container>
      <router-view />
      <window-manager />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
#main {
  background: url('/statics/bg.jpeg') center center no-repeat;
  background-size: cover;
}
.bottomNav {
  position: relative;
  min-width: 300px;
}
</style>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  computed
} from '@vue/composition-api';

import WindowManager from 'src/components/WindowManager.vue';
import BlurredBg from 'src/components/gfx/BlurredBG.vue';
import Dash from 'src/components/Dash.vue';

import store from 'src/store';

export default defineComponent({
  name: 'MainLayout',

  components: {
    WindowManager,
    BlurredBg,
    Dash
  },

  setup() {
    const state = reactive({
      bar: true,
      dash: false
    });

    const windows = computed(() => store.getters['wm/allWindows']);

    function add() {
      store.commit('wm/addWindow', { app: 'explorer' });
      state.dash = false;
    }
    return {
      state,
      add,
      windows
    };
  }
});
</script>
