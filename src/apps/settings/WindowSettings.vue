<template>
  <div class="q-pa-md">
    Windows
    <q-list>
      <q-item-label header>Transitions</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Enter</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-select
            rounded
            outlined
            :options="transitions.enter"
            v-model="settings.transition.enter"
            @input="store.commit('wm/setTransitions', settings.transition)"
          />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Leave</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-select
            rounded
            outlined
            :options="transitions.leave"
            v-model="settings.transition.leave"
            @input="store.commit('wm/setTransitions', settings.transition)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import store from 'src/store';

export default defineComponent({
  name: 'WindowSettings',
  setup() {
    const settings = reactive({
      transition: {
        enter: store.getters['wm/allSettings'].transitions.enter,
        leave: store.getters['wm/allSettings'].transitions.leave
      }
    });

    const transitions = {
      enter: [
        'bounceIn',
        'bounceInUp',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'zoomIn',
        'zoomInUp',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight'
      ],
      leave: [
        'bounceOut',
        'bounceOutUp',
        'bounceOutDown',
        'bounceOutRight',
        'bounceOutLeft',
        'zoomOut',
        'zoomOutUp',
        'zoomOutDown',
        'zoomOutRight',
        'zoomOutLeft'
      ]
    };

    return {
      settings,
      transitions,
      store
    };
  }
});
</script>

<style scoped></style>
