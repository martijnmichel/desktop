import { AppInterface } from 'src/interfaces/App';
import { State } from 'src/store/wm/interface';
export function addWindow(state: State, event: AppInterface) {
  if (event) state.windows.push(event);
}

export function closeWindow(state: State, window: AppInterface) {
  const i = state.windows.findIndex((w: AppInterface) => w.id === window.id);
  state.windows.splice(i, 1);
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
