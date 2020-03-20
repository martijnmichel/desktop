<template>
  <component :is="route" v-if="route" :app="app" />
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  PropType
} from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import _ from 'lodash';
import { RouteInterface } from '../../interfaces/Window';
export default defineComponent({
  name: 'BookmarksApp' as string,
  props: {
    app: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props) {
    // compute route
    const route = computed(() => {
      const page = _.find(
        props.app.routes,
        (r: RouteInterface) => r.name === props.app.route.current
      );
      if (page) return page.component;
      else return false;
    });

    return { route };
  }
});
</script>
