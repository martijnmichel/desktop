<template>
  <component :is="route" v-if="route" :context="state.app" />
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import _ from 'lodash';
import { RouteInterface } from '../../interfaces/Window';
export default defineComponent({
  name: 'BookmarksApp' as string,
  setup(props, ctx) {
    const state = reactive({
      app: {} as AppInterface
    });
    ctx.root.$on('window:data', (application: AppInterface) => {
      console.log(application);
      state.app = application;
      ctx.root.$off('window:data');
    });

    const route = computed(() => {
      const page = _.find(
        state.app.routes,
        (r: RouteInterface) => r.name === state.app.route.current
      );
      if (page) return page.component;
      else return false;
    });

    return { route, state };
  }
});
</script>
