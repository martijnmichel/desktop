import { WindowInterface } from './Window';

export interface AppInterface extends WindowInterface {
  title?: string;
  component: object;
  route: {
    current: string;
    previous: string;
  };
  resizable?: boolean;
}
