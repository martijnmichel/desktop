<template>
  <div id="wm_wrapper">
    <template v-for="window in windows">
      <window v-bind:key="window.id" :window="window" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

import Window from 'src/components/Window.vue';
import store from 'src/store';

export default defineComponent({
  name: 'PageIndex' as string,
  components: { Window },
  computed: {},
  setup() {
    const windows = computed(() => store.getters['wm/allWindows']);
    return { windows };
  }
});
</script>

<style scoped>
#wm_wrapper {
  position: fixed;
  width: 1px;
  height: 1px;
  left: 0;
  top: 0;
}
</style>
