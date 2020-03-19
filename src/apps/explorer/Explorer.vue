<template>
  <q-splitter v-model="state.splitterModel">
    <template v-slot:before>
      <div class="q-pa-md">
        <q-tree
          :nodes="state.simple"
          node-key="label"
          selected-color="primary"
          :selected.sync="state.selected"
          default-expand-all
          draggable
        />
      </div>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="state.selected"
        animated
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="Relax Hotel">
          <div class="text-h4 q-mb-md">Welcome</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
        </q-tab-panel>

        <q-tab-panel name="Food">
          <div class="text-h4 q-mb-md">Food</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
        </q-tab-panel>

        <q-tab-panel name="Room service">
          <div class="text-h4 q-mb-md">Room service</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
        </q-tab-panel>

        <q-tab-panel name="Room view">
          <div class="text-h4 q-mb-md">Room view</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType } from '@vue/composition-api';
import { AppInterface } from '../../interfaces/App';
export default defineComponent({
  name: 'ExplorerApp' as string,
  props: {
    ctx: {
      type: Object as PropType<AppInterface>,
      required: true
    }
  },
  setup() {
    const state = reactive({
      splitterModel: 50,
      selected: 'Food',
      simple: [
        {
          label: 'Relax Hotel',
          children: [
            {
              label: 'Food',
              icon: 'restaurant_menu'
            },
            {
              label: 'Room service',
              icon: 'room_service'
            },
            {
              label: 'Room view',
              icon: 'photo'
            }
          ]
        }
      ]
    });

    return { state };
  }
});
</script>
