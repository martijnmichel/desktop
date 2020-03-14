<template>
  <q-card
    class="window"
    :id="`window-${window.id}`"
    :style="
      `
        width: ${window.width}px;
        height: ${window.height}px;
        transform: translateX(${window.x}px) translateY(${window.y}px)    
    `
    "
  >
    <div class="row q-col-gutter-xs">
      <div class="col-12">
        <q-bar dense @mousedown="setDraggable()">
          <q-btn
            dense
            flat
            round
            icon="lens"
            size="8.5px"
            color="red"
            @click="close()"
          />
          <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
          <q-btn
            dense
            flat
            round
            icon="lens"
            size="8.5px"
            color="green"
            @click="window.maximize()"
          />
          <div class="col text-center text-weight-bold">
            {{ window.title }}
          </div>
        </q-bar>
        <q-bar style="min-width: 250px;" dense class="bg-grey-2">
          <template v-for="(menu, index) in window.menu">
            <div class="cursor-pointer non-selectable" v-bind:key="index">
              {{ menu.name }}
              <q-menu>
                <q-list dense style="min-width: 100px">
                  <q-item
                    clickable
                    v-close-popup
                    v-for="(item, itemIndex) in menu.items"
                    v-bind:key="`item${itemIndex}`"
                  >
                    <q-item-section>{{ item.name }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
          </template>
        </q-bar>
      </div>

      <div class="col-12">
        {{ window }}
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { WindowInterface } from 'src/interfaces/Window';
import store from 'src/store';

/**
 *
 *
 *        DEFINE WINDOW FUNCTIONS
 *
 *
 */

function useWindow(window: WindowInterface) {
  function setDraggable() {
    const element = document.getElementById(`window-${window.id}`);
    if (element) element.setAttribute('draggable', 'true');
  }

  function dragstart(event: Event) {
    console.log(event);
  }
  function dragend(e: Event) {
    const element = document.getElementById(`window-${window.id}`);
    if (element) element.removeAttribute('draggable');
    store.commit('wm/updateWindow', {
      window: window,
      context: e
    });
  }

  function close() {
    store.commit('wm/closeWindow', window.id);
  }

  onMounted(() => {
    const element = document.getElementById(`window-${window.id}`);
    // Add the ondragstart event listener

    if (element) {
      element.addEventListener('dragstart', dragstart, false);
      element.addEventListener('dragend', dragend, false);
    }
  });

  return {
    setDraggable,
    dragstart,
    dragend,
    onMounted,
    close
  };
}

export default defineComponent({
  name: 'Window' as string,
  props: {
    window: Object
  },
  setup({ window }) {
    return { ...useWindow(window) };
  }
});
</script>

<style scoped>
.window {
  position: absolute;
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
