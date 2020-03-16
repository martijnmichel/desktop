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
            :options="transitions"
            v-model="settings.transition.enter"
            @input="
              store.commit('wm/updateSettings', {
                transitions: {
                  enter: `animated ${settings.transition.enter} faster`
                }
              })
            "
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
            :options="transitions"
            v-model="settings.transition.leave"
            @input="
              store.commit('wm/updateSettings', {
                transitions: {
                  leave: `animated ${settings.transition.leave} faster`
                }
              })
            "
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
        enter: '',
        leave: ''
      }
    });

    const transitions = [
      'bounceIn',
      'bounceInUp',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceOut',
      'bounceOutUp',
      'bounceOutDown',
      'bounceOutRight',
      'bounceOutLeft'
    ];

    return {
      settings,
      transitions,
      store
    };
  }
});
</script>

<style scoped></style>
