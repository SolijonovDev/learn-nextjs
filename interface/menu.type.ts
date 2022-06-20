
export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuType {
  _id: {
    secondCategory:string;
  };
  pages: PageItem[];
}
