import { AppInterface } from 'src/interfaces/App';
import { State } from 'src/store/wm/interface';
import Vue from 'vue';
import _ from 'lodash';
export function addWindow(state: State, event: AppInterface) {
  if (event) state.windows.push(event);
}

export function closeWindow(state: State, window: AppInterface) {
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].open = false;
  state.windows[i].show = false;
  state.windows.splice(i, 1);
}

export function minimizeWindow(state: State, window: AppInterface) {
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].show = false;
}

export function restoreWindow(state: State, window: AppInterface) {
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].show = true;
}

export function updatePosition(
  state: State,
  event: { window: AppInterface; x: number; y: number }
) {
  const i = state.windows.findIndex(
    (w: AppInterface) => w.id === event.window.id
  );
  state.windows[i].x = event.x;
  state.windows[i].y = event.y;
}

export function updateWindow(
  state: State,
  data: { context: Event; window: AppInterface }
) {
  const i = state.windows.findIndex(
    (w: AppInterface) => w.id === data.window.id
  );
  state.windows[i] = data.window;
}

export function setTransitions(
  state: State,
  data: { enter: string; leave: string }
) {
  state.settings.transitions = data;
}
