<template>
  <q-page id="load" class="flex flex-center justify-evenly">
    <q-spinner color="primary" size="3em" />
  </q-page>
</template>

<style scoped>
#load {
  background: rgb(108, 108, 108);
  background: -moz-radial-gradient(
    circle,
    rgba(108, 108, 108, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(108, 108, 108, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(108, 108, 108, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6c6c6c",endColorstr="#505050",GradientType=1);
}
</style>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';
import store from 'src/store';

export default defineComponent({
  name: 'Login',
  setup(p, ctx) {
    watch(() => {
      if (store.getters['dm/loaded']) {
        ctx.root.$router.push('/');
      }
    });
  }
});
</script>
