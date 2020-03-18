<template>
  <q-bar
    class="fixed full-width bg-transparent transparent-dark blurred system-bar text-white"
  >
    <q-btn dense flat icon="desktop_mac" />
    <div class="text-weight-bold">
      Dtop
    </div>

    <template v-if="window">
      <div
        class="cursor-pointer non-selectable"
        v-for="(menu, index) in window.menu"
        v-bind:key="index"
      >
        {{ menu.name }}
        <q-menu>
          <q-list dense>
            <template v-for="(item, itemIndex) in menu.items">
              <q-item
                clickable
                v-close-popup
                v-bind:key="`item${itemIndex}`"
                v-if="item.action"
                @click="item.action()"
              >
                <q-item-section>{{ item.name }}</q-item-section>
              </q-item>
              <q-separator
                v-bind:key="`item${itemIndex}`"
                v-if="item === 'separator'"
              />
            </template>
          </q-list>
        </q-menu>
      </div>
    </template>
    <q-space />
    <q-btn dense flat icon="airplay" class="gt-xs" />
    <q-btn dense flat icon="battery_charging_full" />
    <q-btn dense flat icon="wifi" />
    <div>9:41</div>
    <q-btn dense flat icon="search" />
    <q-btn dense flat icon="list">
      <q-menu dense content-style="min-width: 200px">
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="user_circle" />
            </q-item-section>
            <q-item-section>Profile</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="signout" />
            </q-item-section>
            <q-item-section>Log out...</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import store from 'src/store';
import _ from 'lodash';
import { AppInterface } from '../interfaces/App';

export default defineComponent({
  name: '',
  setup() {
    const window = computed(() => {
      return _.find(store.getters['wm/allWindows'], (w: AppInterface) => {
        return w.active === true;
      });
    });
    return { window };
  }
});
</script>

<style scoped>
.system-bar {
  z-index: 5999;
}
</style>
