<template>
  <q-list>
    <q-toolbar class="q-gutter-xs">
      <q-btn dense icon="add" color="primary">
        <q-menu dense auto-close>
          <q-list>
            <q-item clickable @click="app.to('add:bookmark')">
              <q-item-section>Bookmark</q-item-section>
            </q-item>
            <q-item clickable @click="app.to('add:group')">
              <q-item-section>Group</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-space />
      <q-btn
        dense
        icon="refresh"
        @click="app.get('GET:BOOKMARKS')"
        color="primary"
      />
    </q-toolbar>
    <template v-if="app.data">
      <q-list>
        <q-expansion-item
          v-for="group in app.data.groups"
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
    app: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup() {}
});
</script>
