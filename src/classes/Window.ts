import { WindowInterface } from 'src/interfaces/Window';

import store from 'src/store';
import _ from 'lodash';
import uniqid from 'uniqid';

export default class Window {
  protected id: number = uniqid();
  public width = 480;
  public height = 320;
  public x = 10;
  public y = 10;
  public theme?: string = 'light';
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
  ];
  public constructor(event: WindowInterface) {
    _.each(event, (e: Event, k: string) => (this[k] = e));
    this.setPosition();
    store.commit('wm/addWindow', this);
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
