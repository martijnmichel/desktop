import { AppInterface } from 'src/interfaces/App';
import { State } from 'src/store/wm/interface';
import Vue from 'vue';
import _ from 'lodash';
import { StoreInterface } from 'src/store';

export function init(state: State, event: StoreInterface) {
  console.log(state);
  Vue.set(state, 'settings', event.wm.settings);
}

export function addWindow(state: State, event: AppInterface) {
  if (event) {
    state.windows.push(event);
  }
}

export function closeWindow(state: State, window: AppInterface) {
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].active = false;
  state.windows.splice(i, 1);
}

export function minimizeWindow(state: State, window: AppInterface) {
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].active = false;
  state.windows[i].open = false;
}

export function restoreWindow(state: State, window: AppInterface) {
  _.each(state.windows, (w: AppInterface) => {
    if (w.active) w.active = false;
  });
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].active = true;
  state.windows[i].open = true;
}

export function setActiveWindow(state: State, window: AppInterface) {
  _.each(state.windows, (w: AppInterface) => {
    if (w.active) w.active = false;
  });
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows[i].active = true;
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

export function updateDimensions(
  state: State,
  event: { window: AppInterface; width: number; height: number }
) {
  const i = state.windows.findIndex(
    (w: AppInterface) => w.id === event.window.id
  );
  state.windows[i].width = event.width;
  state.windows[i].height = event.height;
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

export function updateRoute(
  state: StoreInterface['wm'],
  event: { window: AppInterface; route: string }
) {
  const i = state.windows.findIndex(
    (w: AppInterface) => w.id === event.window.id
  );
  state.windows[i].route.previous = state.windows[i].route.current;
  state.windows[i].route.current = event.route;
}
