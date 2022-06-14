interface IInfo {
  desc: string;
  isActive: boolean;
}

interface ITags {
  name: string;
  value: number;
}

export interface IBlog {
  userId: number | undefined | null;
  id: number;
  title: string;
  info: IInfo;
  tags: ITags[];
}
