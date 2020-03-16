export interface WindowInterface {
  id: number;
  width: number;
  height: number;
  theme: string;
  menu: object[] | boolean;
  preventMultiple: boolean;
  show: boolean;
  open: boolean;
  x: number;
  y: number;
  close: () => void;
  minimize: () => void;
  maximize: () => void;
  updatePosition: (x: number, y: number) => void;
}
