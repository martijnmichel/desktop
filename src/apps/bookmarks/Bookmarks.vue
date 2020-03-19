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
    // data
    const state = reactive({
      app: {} as AppInterface
    });

    // link app to window
    ctx.root.$on('app:init', (application: AppInterface) => {
      state.app = application;
      ctx.root.$off('app:init');
    });

    // compute route
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
