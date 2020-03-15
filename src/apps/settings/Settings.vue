<template>
  <div class="row q-px-sm q-gutter-sm" v-if="!state.active">
    <q-btn
      flat
      v-for="(item, index) in state.settings"
      v-bind:key="index"
      @click="state.active = item"
      stack
    >
      <q-img :src="item.icon" flat style="width: 72px; height: 72px" />
      <span>{{ item.name }}</span>
    </q-btn>
  </div>
  <div v-else-if="state.active">
    <q-bar class="bg-transparent">
      <q-btn
        icon="chevron_left"
        label="go back"
        flat
        @click="state.active = null"
      />
    </q-bar>
    <component :is="state.active.component" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import DesktopSettings from './DesktopSettings.vue';
import SoundSettings from './SoundSettings.vue';
export default defineComponent({
  name: 'ExplorerApp' as string,
  setup() {
    const state = reactive({
      splitterModel: 50,
      selected: 'Food',
      active: null,
      settings: [
        {
          name: 'Desktop',
          component: DesktopSettings,
          icon: 'https://img.icons8.com/color/96/000000/desktop-mac.png'
        },
        {
          name: 'Sound',
          component: SoundSettings,
          icon: 'https://img.icons8.com/color/96/000000/room-sound.png'
        }
      ]
    });

    return { state };
  }
});
</script>
