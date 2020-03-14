import { WindowInterface } from 'src/interfaces/Window';
export function addWindow(state: any, event: WindowInterface) {
  if (!event) event = {};

  state.windows.push(event);
}

export function closeWindow(state: any, id: string) {
  const i = state.windows.findIndex(w => w.id === id);
  state.windows.splice(i, 1);
}

export function updateWindow(
  state: any,
  data: { context: Event; window: WindowInterface }
) {
  console.log(data.window);
  const i = state.windows.findIndex(
    (w: WindowInterface) => w.id === data.window.id
  );
  state.windows[i] = data.window;
}
