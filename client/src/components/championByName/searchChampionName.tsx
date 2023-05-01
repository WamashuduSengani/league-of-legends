type Champion = {
  info: any;
  tags: any;
  id: string;
  name: string;
  title: string;
  image: string;
};

function filterChampions(champions: Champion[], searchQuery: string) {
  return champions.filter((champion) => {
    const nameMatches = champion.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const titleMatches = champion.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return nameMatches || titleMatches;
  });
}

export default filterChampions;
