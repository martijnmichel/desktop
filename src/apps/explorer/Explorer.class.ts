import Window from 'src/classes/Window';
export default class Explorer extends Window {
  public root?: string = 'Base';
  public constructor(data: object) {
    super(data);
  }
}
