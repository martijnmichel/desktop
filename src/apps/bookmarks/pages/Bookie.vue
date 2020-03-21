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
          default-opened
        >
          <q-item>
            <q-item-section>
              <div class="row q-gutter-md">
                <q-btn
                  flat
                  class="bg-grey-2"
                  v-for="bookmark in group.bookmarks"
                  :key="bookmark.id"
                  stack
                  @click="open(bookmark.url)"
                  type="a"
                >
                  <q-icon name="link" size="4em" />
                  {{ bookmark.name }}
                </q-btn>

                <q-btn
                  flat
                  class="bg-grey-2"
                  size="2em"
                  icon="add"
                  outline
                  @click="app.to('add:bookmark', { group: group.name })"
                />
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
  setup() {
    function open(url: string) {
      const win = window.open(url, '_blank');

      if (win) win.focus();
    }
    return { open };
  }
});
</script>
