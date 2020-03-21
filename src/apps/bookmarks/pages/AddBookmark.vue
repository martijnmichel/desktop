<template>
  <div>
    <q-toolbar>
      <q-btn @click="app.to('')" flat round icon="chevron_left" />
      <q-toolbar-title>
        Add Bookmark
      </q-toolbar-title>
    </q-toolbar>
    <q-item>
      <q-item-section>
        <q-input v-model="name" outlined placeholder="Name" />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-input v-model="url" outlined placeholder="URL" />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-select
          square
          outlined
          v-model="group"
          :options="groups"
          label="Group"
          option-value="name"
          option-label="name"
          map-options
        />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-btn @click="save()" color="primary" label="save" />
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api';
import uniqid from 'uniqid';
import { Group, BookieAppInterface } from '../BookieTypings';
export default defineComponent({
  name: 'AddBookmark' as string,
  props: {
    app: {
      type: Object as PropType<BookieAppInterface>,
      required: true
    }
  },
  setup(props) {
    const name = ref('');
    const url = ref('');

    const groups = props.app.data.groups;

    const group = props.app.route ? props.app.route.params.group : '';

    function save() {
      const bookmark = {
        name: name.value,
        id: uniqid(),
        url: url.value
      };
      const i = groups.findIndex(g => g.name === group);
      groups[i].bookmarks.push(bookmark);
      props.app.set('ADD:BOOKMARK', {
        index: i,
        bookmarks: groups[i].bookmarks
      });
      props.app.to('');
    }

    return { name, url, groups, group, save };
  }
});
</script>
