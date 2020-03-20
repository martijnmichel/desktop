<template>
  <div id="wm_wrapper">
    <template v-for="ctx in wm">
      <window v-bind:key="ctx.id" :ctx="ctx" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import Window from 'src/components/Window.vue';
import { wm } from 'src/bus/wm.bus';

export default defineComponent({
  name: 'PageIndex' as string,
  components: { Window },
  computed: {},
  setup() {
    return { wm };
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
