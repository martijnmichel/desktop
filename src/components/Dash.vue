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
      auto-close
    >
      <q-card flat class="bg-transparent">
        <blurred-bg />
        <q-card-section>
          <q-toolbar>
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
              round
              flat
              size="48px"
              @click="new app()"
              v-for="app in applications"
              v-bind:key="`app-${app.app}`"
            >
              <q-img :src="app.icon" width="96px" height="auto" />
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
      dash: false
    });

    const applications = computed(() => apps);

    return { state, applications };
  }
});
</script>
