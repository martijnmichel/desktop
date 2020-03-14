<template>
  <div id="wm_wrapper">
    <template v-for="window in windows">
      <window v-bind:key="window.id" :window="window" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Window from 'src/components/Window.vue';

export default Vue.extend({
  name: 'PageIndex' as string,
  data() {
    return {};
  },
  components: { Window },
  computed: {
    windows() {
      return this.$store.getters['wm/allWindows'];
    }
  },
  mounted() {},
  methods: {}
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
