import Window from 'src/classes/Window';
export default class Explorer extends Window {
  public root?: string = '/';
  public title = 'Explorer';

  public static app = 'explorer';
  public static icon?: string =
    'https://img.icons8.com/color/96/000000/opened-folder.png';
  public constructor(data: object) {
    super(data);
    console.log(this);
  }
}
