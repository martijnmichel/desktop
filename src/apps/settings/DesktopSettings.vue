<template>
  <div class="q-pa-md">
    Desktop
    <q-list>
      <q-item-label header>Background</q-item-label>

      <q-item>
        <q-item-section>
          <div class="row q-col-gutter-sm">
            <template v-for="i in 9">
              <div class="col-4" v-bind:key="i">
                <q-img
                  :src="`/statics/bg${i}.jpeg`"
                  :ratio="16 / 9"
                  class="cursor-pointer"
                  @click="
                    store.commit('dm/updateSettings', {
                      background: `/statics/bg${i}.jpeg`
                    })
                  "
                />
              </div>
            </template>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import store from 'src/store';

export default defineComponent({
  name: 'DesktopSettings',
  setup() {
    const notifications = reactive({
      friendRequest: true,
      battery: true
    });
    const settings = reactive({
      volume: 100,
      mic: 100
    });

    return {
      notifications,
      settings,
      store
    };
  }
});
</script>

<style scoped></style>
