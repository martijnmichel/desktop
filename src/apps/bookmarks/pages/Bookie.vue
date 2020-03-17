<template>
  <q-list>
    <q-toolbar>
      <q-btn dense icon="add" color="primary">
        <q-menu dense auto-close>
          <q-list>
            <q-item clickable @click="context.to('add:bookmark')">
              <q-item-section>Bookmark</q-item-section>
            </q-item>
            <q-item clickable @click="context.to('add:group')">
              <q-item-section>Group</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-expansion-item
      v-for="(group, index) in bookie"
      :key="index"
      :label="group.name"
    >
      <span v-if="!group.bookmarks">
        No bookmarks yet, go add some...
      </span>
    </q-expansion-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';
export default defineComponent({
  name: 'BookieMain' as string,
  props: {
    context: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props, ctx) {
    const bookie: object[] | null = ctx.root.$q.localStorage.getItem(
      'desktop:app:bookie'
    );
    return { bookie };
  }
});
</script>
