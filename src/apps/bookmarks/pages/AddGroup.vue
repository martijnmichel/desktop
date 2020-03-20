<template>
  <div>
    <q-toolbar>
      <q-btn @click="ctx.to('')" flat round icon="chevron_left" />
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
import { AppInterface } from 'src/interfaces/App';
import db from '../firestore';
import { BookieInterface, Group } from '../BookieTypings';
export default defineComponent({
  name: 'AddGroup' as string,
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    },
    data: {
      type: Object as PropType<BookieInterface['data']>,
      required: true
    }
  },
  setup(props, ctx) {
    const name = ref('');
    function save() {
      let groups = props.data.groups;

      const g = new Group(name.value);

      if (groups) groups.push(JSON.parse(JSON.stringify(g)));
      else {
        groups = [];
        groups.push(JSON.parse(JSON.stringify(g)));
      }

      db.set('ADD:GROUP', groups);

      props.ctx.to('');
    }
    return { name, save };
  }
});
</script>
