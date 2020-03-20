<template>
  <div id="wm_wrapper">
    <template v-for="ctx in wm.windows">
      <window v-bind:key="ctx.id" :ctx="ctx" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from '@vue/composition-api';

import Window from 'src/components/Window.vue';
import store from 'src/store';

import { AppInterface } from 'src/interfaces/App';

export default defineComponent({
  name: 'PageIndex' as string,
  components: { Window },
  computed: {},
  setup() {
    const windows = computed(() => store.getters['wm/allWindows']);
    const wm = reactive({
      windows: [] as AppInterface[]
    });
    return { windows, wm };
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
