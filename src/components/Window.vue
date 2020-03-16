<template>
  <transition
    name="custom-classes-transition"
    appear
    :appear-active-class="`animated ${transitions.enter} faster`"
    :enter-active-class="`animated ${transitions.enter} faster`"
    :leave-active-class="`animated ${transitions.leave} faster`"
    v-if="window.show"
  >
    <vue-draggable-resizable
      :w="window.width"
      :h="window.height"
      :x="window.x"
      :y="window.y"
      drag-handle=".bar"
      :on-drag-start="onDragStart"
      @dragstop="onDragStop"
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
                @click="window.close()"
              />
              <q-btn
                dense
                flat
                round
                icon="lens"
                @click="window.minimize()"
                size="8.5px"
                color="yellow"
              />
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

          <div
            class="col-12"
            style="height: calc(100% - 48px); overflow-y: auto"
          >
            <component v-bind:is="window.component" />
          </div>
        </div>
      </q-card>
    </vue-draggable-resizable>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  onMounted,
  computed
} from '@vue/composition-api';
import { AppInterface } from 'src/interfaces/App';

import store from 'src/store';

import VueDraggableResizable from 'vue-draggable-resizable';
import _ from 'lodash';

/**
 *
 *
 *        DEFINE WINDOW FUNCTIONS
 *
 *
 */

function useWindow(window: AppInterface) {
  function putOnTop() {
    const windows = document.querySelectorAll('.window');
    if (windows) {
      _.each(windows, (win: Element) =>
        win.setAttribute('style', 'z-index: unset')
      );
    }
    const element = document.getElementById(`window-${window.id}`);
    if (element) element.setAttribute('style', 'z-index: 9999');
  }

  function onDragStart() {
    putOnTop();
  }

  function onDragStop(x: number, y: number) {
    window.updatePosition(x, y);
  }

  onMounted(() => {
    putOnTop();
  });

  const transitions = computed(() => {
    const { transitions } = store.getters['wm/allSettings'];
    return transitions;
  });

  return {
    putOnTop,
    onMounted,
    onDragStart,
    transitions,
    onDragStop
  };
}

export default defineComponent({
  name: 'Window' as string,
  props: {
    window: {
      type: Object as PropType<AppInterface>,
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

<style scoped lang="scss">
.window {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.vdr {
  border: none;
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
