import Window from 'src/classes/Window';
import Explorer from 'src/apps/explorer/Explorer.class';
import { WindowInterface } from 'src/interfaces/Window';
export function addWindow(state: any, event: WindowInterface) {
  console.log('add');
  if (!event) event = {};
  let w;
  switch (event.app) {
    case 'explorer':
      w = new Explorer(event);
      break;
    default:
      w = new Window(event);
      break;
  }
  state.windows.push(w);
}
