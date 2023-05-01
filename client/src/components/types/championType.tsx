export type Champion = {
  id: string;
  name: string;
  title: string;
  blurb: string;
  image: string;
  info: ChampionInfo;
  tags: string[];
};

type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};
