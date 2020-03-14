<template>
  <q-layout view="lHh Lpr lFf">
    <q-dialog
      v-model="state.bar"
      position="bottom"
      color="transparent"
      seamless
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="state.dash = true"
          aria-label="Menu"
        >
        </q-btn>

        <q-dialog maximized v-model="state.dash" transition-show="fadeIn">
          <q-card class="bg-blurred d-flex flex-center">
            <q-btn @click="state.dash = false" label="X" />
            <q-btn icon="explorer" label="exploer" @click="add()" />
          </q-card>
        </q-dialog>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-dialog>

    <q-page-container>
      <router-view />
      <window-manager />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from '@vue/composition-api';

import WindowManager from 'src/components/WindowManager.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    WindowManager
  },

  setup() {
    const state = reactive({
      bar: true,
      dash: false
    });

    function add() {
      this.$store.commit('wm/addWindow', { app: 'explorer' });
      state.dash = false;
    }
    return {
      state,
      add
    };
  }
});
</script>
