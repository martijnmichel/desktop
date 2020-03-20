<template>
  <q-list>
    <q-toolbar class="q-gutter-xs">
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
      <q-space />
      <q-btn
        dense
        icon="refresh"
        @click="ctx.get('GET:BOOKMARKS')"
        color="primary"
      />
    </q-toolbar>
    <template v-if="data">
      <q-list>
        <q-expansion-item
          v-for="group in data.groups"
          :key="group.id"
          :label="group.name"
        >
          <q-item>
            <q-item-section>
              <span v-if="group.bookmarks.length === 0">
                No bookmarks yet, go add some...
              </span>

              <div class="row" v-else>
                <div class="col-3">
                  {{ group.id }}
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </template>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';

export default defineComponent({
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    },
    data: {
      type: Object
    }
  },
  setup(props, ctx) {}
});
</script>
