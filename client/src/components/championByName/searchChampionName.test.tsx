import filterChampions from "./searchChampionName";

describe("filterChampions", () => {
  const champions = [
    {
      info: {},
      tags: [],
      id: "champion1",
      name: "Ahri",
      title: "the Nine-Tailed Fox",
      image: "ahri.png",
    },
    {
      info: {},
      tags: [],
      id: "champion2",
      name: "Garen",
      title: "The Might of Demacia",
      image: "garen.png",
    },
    {
      info: {},
      tags: [],
      id: "champion3",
      name: "Lux",
      title: "the Lady of Luminosity",
      image: "lux.png",
    },
  ];

  test("returns all champions when searchQuery is empty", () => {
    const filteredChampions = filterChampions(champions, "");
    expect(filteredChampions).toEqual(champions);
  });

  test("returns matching champions when searchQuery matches name", () => {
    const filteredChampions = filterChampions(champions, "ahri");
    expect(filteredChampions).toEqual([champions[0]]);
  });

  test("returns matching champions when searchQuery matches title", () => {
    const filteredChampions = filterChampions(champions, "lady of luminosity");
    expect(filteredChampions).toEqual([champions[2]]);
  });

  test("returns empty array when searchQuery does not match any champions", () => {
    const filteredChampions = filterChampions(
      champions,
      "non-existent champion"
    );
    expect(filteredChampions).toEqual([]);
  });
});
