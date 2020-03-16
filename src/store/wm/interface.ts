import { AppInterface } from 'src/interfaces/App';
export interface State {
  windows: AppInterface[];
  settings: {
    interface: {
      enter: string;
      leave: string;
    };
  };
}
