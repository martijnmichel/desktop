import { WindowInterface } from 'src/interfaces/Window';

import store from 'src/store';
import _ from 'lodash';
import uniqid from 'uniqid';

export default class Window {
  protected id: number = uniqid();
  public width = 640;
  public height = 480;
  public x = 10;
  public y = 10;
  public theme?: string = 'light';
  public preventMultiple = false;
  public menu = [
    {
      name: 'File',
      items: [
        {
          name: 'Close',
          action: (window: WindowInterface) => {
            const { close } = this;
            close(window);
          }
        }
      ]
    }
  ] as object[] | boolean;
  public constructor(e: WindowInterface = {}) {
    if (e.width) this.width = e.width;
    if (e.height) this.height = e.height;
    if (e.x) this.x = e.x;
    if (e.y) this.y = e.y;

    this.setPosition();
  }
  public setPosition() {
    _.each(store.getters['wm/allWindows'], (w: WindowInterface) => {
      if (w.x === this.x) this.x += 20;
      if (w.y === this.y) this.y += 20;
    });
  }
  public close(window: WindowInterface) {
    store.commit('wm/closeWindow', window);
  }
  public maximize() {
    store.commit('wm/updateWindow', { window: this });
  }
}
