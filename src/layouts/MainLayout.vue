<template>
  <q-layout
    view="lHh Lpr lFf"
    id="main"
    :style="
      `
      background: url('${settings.background}') center center no-repeat;
      background-size: cover;
      `
    "
  >
    <q-dialog
      v-model="state.bar"
      position="bottom"
      color="transparent"
      seamless
    >
      <div class="bottomNav">
        <blurred-bg color="rgba(0,0,0,0.5)" />
        <q-toolbar>
          <Dash />

          <template v-for="window in wm">
            <q-avatar rounded v-bind:key="window.id">
              <q-img
                :src="window.constructor.icon"
                @click="!window.show ? window.restore() : null"
                class="navIcon"
              />
            </q-avatar>
          </template>
        </q-toolbar>
      </div>
    </q-dialog>

    <system-bar />

    <q-page-container>
      <router-view />
      <window-manager />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
#main {
  background-size: cover;
}
.bottomNav {
  position: relative;
  min-width: 300px;
}
</style>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';

import WindowManager from 'src/components/WindowManager.vue';
import SystemBar from 'src/components/SystemBar.vue';
import BlurredBg from 'src/components/gfx/BlurredBG.vue';
import Dash from 'src/components/Dash.vue';

import store from 'src/store';

import { wm } from 'src/bus/wm.bus';

export default defineComponent({
  name: 'MainLayout',

  components: {
    WindowManager,
    SystemBar,
    BlurredBg,
    Dash
  },

  setup() {
    const state = reactive({
      bar: true,
      dash: false
    });

    const windows = computed(() => store.getters['wm/allWindows']);
    const settings = computed(() => store.getters['dm/allSettings']);

    function add() {
      store.commit('wm/addWindow', { app: 'explorer' });
      state.dash = false;
    }
    return {
      state,
      add,
      windows,
      wm,
      settings
    };
  }
});
</script>
