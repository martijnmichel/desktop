<template>
  <component :is="app.route.current.component" v-if="app.route" :app="app" />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
export default defineComponent({
  name: 'BookmarksApp' as string,
  props: {
    app: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  }
});
</script>
