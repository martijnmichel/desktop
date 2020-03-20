<template>
  <q-list>
    <q-toolbar>
      <q-btn dense icon="add" color="primary">
        <q-menu dense auto-close>
          <q-list>
            <q-item clickable @click="ctx.to('add:bookmark')">
              <q-item-section>Bookmark</q-item-section>
            </q-item>
            <q-item clickable @click="ctx.to('add:group')">
              <q-item-section>Group</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn dense icon="refresh" @click="refresh()" color="primary" />
    </q-toolbar>
    <template v-if="state">
      <q-expansion-item
        v-for="(group, index) in state.bookmarks"
        :key="index"
        :label="group.name"
      >
        <span v-if="!group.bookmarks">
          No bookmarks yet, go add some...
        </span>
      </q-expansion-item>
    </template>
  </q-list>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  PropType,
  onMounted,
  reactive
} from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
import db from '../firestore';

export default defineComponent({
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props, ctx) {
    let state = ref({});

    async function refresh() {
      const bookmarks = await db('GET:BOOKMARKS');
      state = ref(bookmarks);
    }

    refresh();

    return { state, refresh };
  }
});
</script>
