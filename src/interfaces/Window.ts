import { AppInterface } from './App';
import { LooseDictionary } from 'quasar';

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
  id: string;
  width: number;
  height: number;
  theme: string;
  route?: {
    params: LooseDictionary;
    current: RouteInterface;
    previous: RouteInterface;
  };
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
}
