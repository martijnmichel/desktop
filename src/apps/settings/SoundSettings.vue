<template>
  <div class="q-pa-md">
    Sound
    <q-list>
      <q-item-label header>Notifications</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery too low</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle
            color="blue"
            v-model="notifications.battery"
            val="battery"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Friend request</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle
            color="green"
            v-model="notifications.friendRequest"
            val="friend"
          />
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Other settings</q-item-label>

      <q-item>
        <q-item-section side>
          <q-icon color="teal" name="volume_down" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="settings.volume"
            :min="0"
            :max="100"
            label
            color="teal"
          />
        </q-item-section>
        <q-item-section side>
          <q-icon color="teal" name="volume_up" />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section side>
          <q-icon color="primary" name="mic" />
        </q-item-section>
        <q-item-section>
          <q-slider v-model="settings.mic" :min="0" :max="100" label />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

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
      settings
    };
  }
});
</script>

<style scoped></style>
