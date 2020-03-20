<template>
  <div>
    <q-toolbar>
      <q-btn @click="app.to('')" flat round icon="chevron_left" />
      <q-toolbar-title>
        Add group
      </q-toolbar-title>
    </q-toolbar>
    <q-item>
      <q-item-section>
        <q-input v-model="name" outlined placeholder="Name" />
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
import db from '../firestore';
import { Group, BookieAppInterface } from '../BookieTypings';
export default defineComponent({
  name: 'AddGroup' as string,
  props: {
    app: {
      type: Object as PropType<BookieAppInterface>,
      required: true
    }
  },
  setup(props) {
    const name = ref('');
    function save() {
      let groups = props.app.data.groups;

      const g = new Group(name.value);

      if (groups) groups.push(JSON.parse(JSON.stringify(g)));
      else {
        groups = [];
        groups.push(JSON.parse(JSON.stringify(g)));
      }

      db.set('ADD:GROUP', groups);

      props.app.to('');
    }
    return { name, save };
  }
});
</script>
