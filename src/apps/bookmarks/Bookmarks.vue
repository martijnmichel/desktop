<template>
  <component :is="route" v-if="route" :ctx="state.app" :data="state.data" />
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import _ from 'lodash';
import { RouteInterface } from '../../interfaces/Window';
import db from './firestore';
import { BookieInterface, BookmarkGroup } from './BookieTypings';
export default defineComponent({
  name: 'BookmarksApp' as string,
  setup(props, ctx) {
    // data
    const state = reactive({
      app: {} as AppInterface,
      data: {} as BookieInterface['data']
    });

    // link app to window
    ctx.root.$on('app:init', (application: AppInterface) => {
      state.app = application;
      ctx.root.$off('app:init');
      ctx.root.$on(`app:${state.app.id}`, (data: BookieInterface['data']) => {
        state.data = data;
      });
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

    async function refresh() {
      const bookmarks = await db.get('GET:BOOKMARKS');
      if (bookmarks) state.data = bookmarks;
    }

    ctx.root.$on('add:group', (group: BookmarkGroup) =>
      state.data.groups.push(group)
    );

    refresh();

    return { route, state };
  }
});
</script>
