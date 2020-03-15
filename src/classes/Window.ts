import { WindowInterface } from 'src/interfaces/Window';

import store from 'src/store';
import _ from 'lodash';
import uniqid from 'uniqid';

export default class Window implements WindowInterface {
  id = uniqid();
  width = 640;
  height = 480;
  x = 10;
  y = 10;
  theme = 'light';
  preventMultiple = false;
  menu = [
    {
      name: 'File',
      items: [
        {
          name: 'Close',
          action: () => {
            const { close } = this;
            close();
          }
        }
      ]
    }
  ] as object[] | boolean;
  public constructor(e: WindowInterface) {
    if (e) {
      if (e.width) this.width = e.width;
      if (e.height) this.height = e.height;
      if (e.x) this.x = e.x;
      if (e.y) this.y = e.y;
    }

    this.setPosition();
  }
  public setPosition() {
    _.each(store.getters['wm/allWindows'], (w: WindowInterface) => {
      if (w.x === this.x) this.x += 20;
      if (w.y === this.y) this.y += 20;
    });
  }
  close() {
    store.commit('wm/closeWindow', this);
  }
  maximize() {
    store.commit('wm/updateWindow', this);
  }
}
