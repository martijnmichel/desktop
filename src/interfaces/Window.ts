import { AppInterface } from './App';
import { ComponentInstance } from '@vue/composition-api/dist/component';

export interface MenuItemInterface {
  name?: string;
  action: () => void;
}

export interface MenuEntryInterface {
  name: string;
  items: MenuItemInterface[];
}

export interface RouteInterface {
  name: string;
  component: () => void;
}
export interface WindowInterface {
  id: number;
  width: number;
  height: number;
  theme: string;
  routes?: RouteInterface[];
  menu: MenuEntryInterface[] | boolean;
  preventMultiple: boolean;
  active: boolean;
  running: boolean;
  open: boolean;
  x: number;
  y: number;
  close: (window: AppInterface) => void;
  minimize: () => void;
  maximize: () => void;
  updatePosition: (x: number, y: number) => void;
  updateDimensions: (width: number, height: number) => void;
  setActive: () => void;
  to: (route: string) => void;
}
