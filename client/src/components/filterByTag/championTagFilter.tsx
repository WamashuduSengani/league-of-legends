import { Champion } from "../types/championType";

export function filterChampionByTag(
  champions: Champion[],
  selectedTag: string,
  searchQuery: string
) {
  const filteredChampions = champions
    .filter(
      (champion) =>
        selectedTag === "" ||
        champion.tags.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
        )
    )
    .filter((champion) =>
      champion.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (filteredChampions.length === 0) {
    return [];
  }

  return filteredChampions;
}
