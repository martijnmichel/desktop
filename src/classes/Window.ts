import { WindowInterface } from 'src/interfaces/Window';
import store from 'src/store';
import _ from 'lodash';
const uniqid = require('uniqid');
export default class Window {
  public title?: string = `Window ${store.getters['wm/allWindows'].length + 1}`;
  protected id: number = uniqid();
  public app = 'emtpy';
  public width?: number = 480;
  public height?: number = 320;
  public x?: number = 10;
  public y?: number = 10;
  public theme?: string = 'light';
  public constructor(event: WindowInterface) {
    _.each(event, (e: Event, k: string) => (this[k] = e));
    this.setPosition();
  }
  public setPosition() {
    _.each(store.getters['wm/allWindows'], w => {
      if (w.x === this.x) this.x += 20;
      if (w.y === this.y) this.y += 20;
    });
  }
}
