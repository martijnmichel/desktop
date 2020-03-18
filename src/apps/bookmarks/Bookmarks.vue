<template>
  <component :is="route" v-if="route" :context="context" />
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import _ from 'lodash';
import { RouteInterface } from '../../interfaces/Window';
export default defineComponent({
  name: 'BookmarksApp' as string,
  props: {
    context: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props) {
    const route = computed(() => {
      const page = _.find(
        props.context.routes,
        (r: RouteInterface) => r.name === props.context.route.current
      );
      if (page) return page.component;
      else return false;
    });

    return { window, route };
  }
});
</script>
