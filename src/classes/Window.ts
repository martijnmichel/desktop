import { WindowInterface } from 'src/interfaces/Window';
import store from 'src/store';
import _ from 'lodash';
import uniqid from 'uniqid';

export default class Window {
  protected id: number = uniqid();
  public width?: number | any = 480;
  public height?: number | any = 320;
  public x?: number = 10;
  public y?: number = 10;
  public theme?: string = 'light';
  public menu = [
    {
      name: 'File',
      items: [
        {
          name: 'Close',
          action: this.close
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
  public close() {
    store.commit('wm/closeWindow', this.id);
  }
  public maximize() {
    store.commit('wm/updateWindow', { window: this });
  }
}
