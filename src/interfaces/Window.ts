export interface WindowInterface {
  id: number;
  width: number;
  height: number;
  theme: string;
  menu: object[] | boolean;
  preventMultiple: boolean;
  x: number;
  y: number;
  close: (window: WindowInterface) => void;
  maximize: (window: WindowInterface) => void;
}
