<template>
  <component :is="route" v-if="route" :ctx="ctx" />
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import _ from 'lodash';
import { RouteInterface } from '../../interfaces/Window';
export default defineComponent({
  name: 'BookmarksApp' as string,
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props) {
    const route = computed(() => {
      const page = _.find(
        props.ctx.routes,
        (r: RouteInterface) => r.name === props.ctx.route.current
      );
      if (page) return page.component;
      else return false;
    });

    return { route };
  }
});
</script>
