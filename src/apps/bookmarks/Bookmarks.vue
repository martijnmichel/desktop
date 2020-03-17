<template>
  <component :is="route" v-if="route" :w="window" />
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import store from 'src/store';
import _ from 'lodash';
import { RouteInterface } from '../../interfaces/Window';
export default defineComponent({
  name: 'BookmarksApp' as string,
  setup() {
    const window = computed(() => {
      return _.find(store.getters['wm/allWindows'], (w: AppInterface) => {
        return w.active === true;
      });
    });

    const route = computed(() => {
      const active = _.find(
        store.getters['wm/allWindows'],
        (w: AppInterface) => {
          return w.active === true;
        }
      );
      const page = _.find(
        active.routes,
        (r: RouteInterface) => r.name === active.route.current
      );
      if (page) return page.component;
      else return false;
    });

    return { window, route };
  }
});
</script>
