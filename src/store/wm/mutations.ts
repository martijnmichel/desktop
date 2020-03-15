import { WindowInterface } from 'src/interfaces/Window';
import { State } from 'src/store/wm/interface';
export function addWindow(state: State, event: WindowInterface) {
  if (!event) event = {};

  state.windows.push(event);
}

export function closeWindow(state: State, window: WindowInterface) {
  const i = state.windows.findIndex((w: WindowInterface) => w.id === window.id);
  state.windows.splice(i, 1);
}

export function updateWindow(
  state: State,
  data: { context: Event; window: WindowInterface }
) {
  console.log(data.window);
  const i = state.windows.findIndex(
    (w: WindowInterface) => w.id === data.window.id
  );
  state.windows[i] = data.window;
}
