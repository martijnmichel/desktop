<template>
  <div class="blurred-bg" :style="`background: ${color}`" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'BlurredBG',
  props: {
    color: {
      type: String,
      default: 'rgba(0,0,0,0.3)'
    }
  }
});
</script>
<style scoped>
.blurred-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(30px);
}
</style>
