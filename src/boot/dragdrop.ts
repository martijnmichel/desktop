// import something here

import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';

// "async" is optional
export default () => {
  // something to do

  Vue.component('vue-draggable-resizable', VueDraggableResizable);
};
