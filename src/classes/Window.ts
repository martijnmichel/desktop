import { WindowInterface, MenuEntryInterface } from 'src/interfaces/Window';

import store from 'src/store';
import _ from 'lodash';
import uniqid from 'uniqid';
import { AppInterface } from 'src/interfaces/App';

import { wm } from 'src/bus/wm.bus';

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
    this.x = x;
    this.y = y;
  }
  updateDimensions(width: number, height: number) {
    this.height = height;
    this.width = width;
  }
  setActive() {
    _.each(wm, (w: AppInterface) => {
      w.active = false;
    });
    this.active = true;
  }
  close() {
    const i = wm.findIndex((w: AppInterface) => w.id === this.id);
    wm.splice(i, 1);
  }
  minimize() {
    this.active = false;
    this.open = false;
  }
  restore() {
    this.setActive();
    this.open = true;
  }
  maximize() {
    store.commit('wm/updateWindow', this);
  }
}
