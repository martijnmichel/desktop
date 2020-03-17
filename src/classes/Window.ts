import { WindowInterface, MenuEntryInterface } from 'src/interfaces/Window';

import store from 'src/store';
import _ from 'lodash';
import uniqid from 'uniqid';
import { AppInterface } from 'src/interfaces/App';

export default class Window implements WindowInterface {
  id = uniqid();
  width = 640;
  height = 480;
  x = 10;
  y = 40;
  theme = 'light';
  preventMultiple = false;
  active = true;
  running = true;
  open = true;
  route = {
    current: '',
    previous: ''
  };
  menu = [
    {
      name: 'File',
      items: [
        {
          name: 'Close',
          action: () => {
            const { close } = this;
            close(this);
          }
        }
      ]
    }
  ] as MenuEntryInterface[] | boolean;
  public constructor(e: AppInterface) {
    if (e) {
      if (e.width) this.width = e.width;
      if (e.height) this.height = e.height;
      if (e.x) this.x = e.x;
      if (e.y) this.y = e.y;
    }

    this.setPosition();
  }
  public setPosition() {
    _.each(store.getters['wm/allWindows'], (w: AppInterface) => {
      if (w.x === this.x) this.x += 20;
      if (w.y === this.y) this.y += 20;
    });
  }
  updatePosition(x: number, y: number) {
    store.commit('wm/updatePosition', { window: this, x, y });
  }
  updateDimensions(width: number, height: number) {
    store.commit('wm/updateDimensions', { window: this, width, height });
  }
  setActive() {
    store.commit('wm/setActiveWindow', this);
  }
  close(window: WindowInterface) {
    let w = window;
    if (!window) w = this;
    store.commit('wm/closeWindow', w);
  }
  minimize() {
    store.commit('wm/minimizeWindow', this);
  }
  restore() {
    store.commit('wm/restoreWindow', this);
  }
  maximize() {
    store.commit('wm/updateWindow', this);
  }
  public to(route: string) {
    store.commit('wm/updateRoute', { window: this, route: route });
  }
}
