import { AppInterface } from 'src/interfaces/App';
import { State } from 'src/store/wm/interface';
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

export function updateWindow(
  state: State,
  data: { context: Event; window: AppInterface }
) {
  console.log(data.window);
  const i = state.windows.findIndex(
    (w: AppInterface) => w.id === data.window.id
  );
  state.windows[i] = data.window;
}

export function updateSettings(state: State, data: State) {
  Object.assign(state.settings, data);
}
