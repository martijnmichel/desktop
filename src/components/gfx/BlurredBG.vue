<template>
  <div class="blurred-bg" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'BlurredBG',
  setup() {}
});
</script>
<style scoped>
.blurred-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(30px);
}
</style>
