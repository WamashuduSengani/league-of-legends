import { fetchChampions, mapChampion, getChampionByName } from "./service";

const resolvers = {
  Query: {
    champions: async () => {
      const champions = await fetchChampions();
      return champions.map(mapChampion);
    },
    champion: async (_: any, { name }: { name: string }) => {
      const champion = await getChampionByName(name);
      return champion
        ? mapChampion(champion)
        : { message: `Cannot find Champion with name '${name}'` };
    },
  },
};

export default resolvers;
