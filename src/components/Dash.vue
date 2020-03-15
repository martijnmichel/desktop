<template>
  <q-img
    flat
    dense
    round
    src="statics/dash.png"
    @click="state.dash = true"
    aria-label="Menu"
    class="navIcon"
  >
    <q-dialog
      maximized
      v-model="state.dash"
      transition-show="fadeIn"
      transition-hide="fadeOut"
    >
      <q-card flat class="bg-transparent">
        <blurred-bg />
        <q-card-section>
          <q-toolbar>
            <q-space />
            <q-input
              color="white"
              bg-color="rgba(255,255,255, 0.5)"
              v-model="state.filter"
              rounded
              outlined
              dark
              placeholder="Filter applications..."
            />
            <q-space />
            <q-btn
              @click="state.dash = false"
              icon="close"
              flat
              round
              size="lg"
              color="grey-6"
            />
          </q-toolbar>
        </q-card-section>
        <q-card-section>
          <div class="row justify-center q-gutter-lg">
            <q-btn
              flat
              @click="new app()"
              v-for="app in applications"
              v-bind:key="`app-${app.app}`"
              stack
              v-close-popup
            >
              <q-img :src="app.icon" width="96px" height="auto" />
              <span>{{ app.title }}</span>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-img>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
import BlurredBg from 'src/components/gfx/BlurredBG.vue';
import apps from 'src/apps';

import _ from 'lodash';
export default defineComponent({
  name: 'Dash',
  components: { BlurredBg },
  setup() {
    const state = reactive({
      dash: false,
      filter: ''
    });

    const applications = computed(() => {
      const filtered = _.filter(apps, app => {
        return app.title.toLowerCase().includes(state.filter);
      });
      return filtered;
    });

    return { state, applications };
  }
});
</script>
