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
    </q-toolbar>
    <template v-if="bookie">
      <q-expansion-item
        v-for="(group, index) in bookie"
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
import { defineComponent, ref, PropType } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
export default defineComponent({
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props, ctx) {
    const bookmarks: object[] | null = ctx.root.$q.localStorage.getItem(
      'desktop:app:bookie'
    );

    const bookie = ref(bookmarks);
    return { bookie };
  }
});
</script>
