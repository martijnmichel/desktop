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
import uniqid from 'uniqid';
export default defineComponent({
  name: 'AddGroup' as string,
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup(props, ctx) {
    const name = ref('');
    function save() {
      let bookie: object[] | null = ctx.root.$q.localStorage.getItem(
        'desktop:app:bookie'
      );
      interface Group {
        name: string;
        id: string;
      }
      class Group implements Group {
        public name = '';
        public id: string = uniqid();
        constructor(name: string) {
          this.name = name;
        }
      }

      if (bookie) bookie.push(new Group(name.value));
      else {
        bookie = [];
        bookie.push(new Group(name.value));
      }
      ctx.root.$q.localStorage.set('desktop:app:bookie', bookie);
      props.ctx.to('');
    }
    return { name, save };
  }
});
</script>
