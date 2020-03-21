import { WindowInterface } from './Window';
import { LooseDictionary } from 'quasar';

export interface AppInterface extends WindowInterface {
  title?: string;
  component: object;
  resizable?: boolean;
  to: (name: string, params?: undefined | LooseDictionary) => void;
}
