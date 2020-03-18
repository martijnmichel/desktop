<template>
  <transition
    name="custom-classes-transition"
    appear
    :appear-active-class="`animated ${transitions.enter} faster`"
    :enter-active-class="`animated ${transitions.enter} faster`"
    :leave-active-class="`animated ${transitions.leave} faster`"
    v-if="window.open"
  >
    <vue-draggable-resizable
      :w="window.width"
      :h="window.height"
      :x="window.x"
      :y="window.y"
      :resizable="window.resizable"
      drag-handle=".bar"
      :on-drag-start="onDragStart"
      @dragstop="onDragStop"
      @resizestop="onResizeStop"
      :z="window.active ? 999 : 1"
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
          </div>

          <div class="col-12" style="height: 100%; overflow-y: auto">
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

/**
 *
 *
 *        DEFINE WINDOW FUNCTIONS
 *
 *
 */

function useWindow(window: AppInterface) {
  function onDragStart() {
    if (!window.active) window.setActive();
  }

  function onDragStop(x: number, y: number) {
    window.updatePosition(x, y);
  }

  function onResizeStop(
    top: number,
    left: number,
    width: number,
    height: number
  ) {
    window.updateDimensions(width, height);
  }

  onMounted(() => {
    window.setActive();
  });

  const transitions = computed(() => {
    const { transitions } = store.getters['wm/allSettings'];
    return transitions;
  });

  return {
    onMounted,
    onDragStart,
    transitions,
    onDragStop,
    onResizeStop
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
  setup({ window }, ctx) {
    ctx.root.$nextTick(() => {
      ctx.root.$emit('window:data', window);
    });

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

.active-window {
  z-index: 999;
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
