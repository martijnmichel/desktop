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
        <q-bar dense @mousedown="startDrag()">
          <q-btn dense flat round icon="lens" size="8.5px" color="red" />
          <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
          <q-btn dense flat round icon="lens" size="8.5px" color="green" />
          <div class="col text-center text-weight-bold">
            {{ window.title }}
          </div>
        </q-bar>
      </div>

      <div class="col-12">
        {{ window }}
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Window' as string,
  data() {
    return {};
  },
  props: ['window'],
  computed: {},
  mounted() {
    this.$nextTick(() => {
      // Get the element by id
      const element = document.getElementById(`window-${this.window.id}`);
      // Add the ondragstart event listener
      if (element) {
        element.addEventListener('dragstart', this.drag, false);
        element.addEventListener('dragend', this.dragend, false);
      }
    });
  },
  methods: {
    startDrag() {
      const element = document.getElementById(`window-${this.window.id}`);
      if (element) element.setAttribute('draggable', 'true');
    },
    drag(event: Event) {
      console.log(event);
    },
    dragend(e: Event) {
      const element = document.getElementById(`window-${this.window.id}`);
      if (element) element.removeAttribute('draggable');
      this.$store.commit('wm/updateWindow', {
        window: this.window,
        context: e
      });
    }
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
