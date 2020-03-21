import { AppInterface } from 'src/interfaces/App';
import uniqid from 'uniqid';
import { LooseDictionary } from 'quasar';

export interface BookmarkItem {
  name: string;
  url: string;
  id: string;
}

export interface BookmarkGroup {
  name: string;
  id: string;
  color: string;
  bookmarks: BookmarkItem[];
}

export interface BookieInterface {
  app: AppInterface;
  data: {
    settings: {};
    groups: BookmarkGroup[];
  };
}

export interface BookieAppInterface extends AppInterface {
  data: {
    settings: {};
    groups: BookmarkGroup[];
  };
  set: (type: string, args: LooseDictionary) => void;
}

export class Group implements BookmarkGroup {
  public name = '';
  public bookmarks: BookmarkItem[] = [];
  public id: string = uniqid();
  public color = '#ccc';
  constructor(name: string) {
    this.name = name;
  }
}
