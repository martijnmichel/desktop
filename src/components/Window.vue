<template>
  <vue-draggable-resizable
    :w="window.width"
    :h="window.height"
    :x="window.x"
    :y="window.y"
    drag-handle=".bar"
  >
    <q-card class="window" :id="`window-${window.id}`">
      <div class="row" style="height: inherit">
        <div class="col-12">
          <q-bar dense class="bar">
            <q-btn
              dense
              flat
              round
              icon="lens"
              size="8.5px"
              color="red"
              @click="window.close(window)"
            />
            <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
            <q-btn
              dense
              flat
              round
              icon="lens"
              size="8.5px"
              color="green"
              @click="window.maximize(window)"
            />
            <div class="col text-center text-weight-bold">
              {{ window.constructor.title }}
            </div>
          </q-bar>
          <q-bar dense class="bg-grey-2" v-if="window.menu">
            <template v-for="(menu, index) in window.menu">
              <div class="cursor-pointer non-selectable" v-bind:key="index">
                {{ menu.name }}
                <q-menu>
                  <q-list dense>
                    <q-item
                      clickable
                      v-close-popup
                      v-for="(item, itemIndex) in menu.items"
                      v-bind:key="`item${itemIndex}`"
                      @click="item.action(window)"
                    >
                      <q-item-section>{{ item.name }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </div>
            </template>
          </q-bar>
        </div>

        <div class="col-12" style="height: calc(100% - 48px); overflow-y: auto">
          <component v-bind:is="window.component" />
        </div>
      </div>
    </q-card>
  </vue-draggable-resizable>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { WindowInterface } from 'src/interfaces/Window';
import store from 'src/store';

import VueDraggableResizable from 'vue-draggable-resizable';

/**
 *
 *
 *        DEFINE WINDOW FUNCTIONS
 *
 *
 */

function useWindow(window: WindowInterface) {
  function close() {
    store.commit('wm/closeWindow', window.id);
  }

  return {
    close
  };
}

export default defineComponent({
  name: 'Window' as string,
  props: {
    window: {
      type: Object as PropType<WindowInterface>,
      required: true
    }
  },
  components: {
    VueDraggableResizable
  },
  setup({ window }) {
    return { ...useWindow(window) };
  }
});
</script>

<style scoped>
.window {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

[draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
}
</style>
