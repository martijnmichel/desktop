import { AppInterface } from 'src/interfaces/App';
export interface State {
  windows: AppInterface[];
  settings: {
    transitions: {
      enter: string;
      leave: string;
    };
  };
}
