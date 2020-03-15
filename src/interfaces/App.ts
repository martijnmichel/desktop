import { WindowInterface } from './Window';

export interface AppInterface extends WindowInterface {
  title?: string;
  component: object;
}
