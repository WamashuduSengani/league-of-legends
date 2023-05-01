// import { filterChampionByTag, Champion } from "./filterChampionByTag";

import { filterChampionByTag } from "./championTagFilter";
import { Champion } from "../types/championType";

const champions: Champion[] = [
  {
    id: "ahri",
    name: "Ahri",
    title: "the Nine-Tailed Fox",
    blurb: "Innately connected to the latent power of...",
    image: "https://example.com/ahri.png",
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
    tags: ["Mage", "Assassin"],
  },
  {
    id: "ashe",
    name: "Ashe",
    title: "the Frost Archer",
    blurb: "Iceborn warmother of the Avarosan tribe...",
    image: "https://example.com/ashe.png",
    info: { attack: 7, defense: 3, magic: 2, difficulty: 4 },
    tags: ["Marksman"],
  },
  {
    id: "morgana",
    name: "Morgana",
    title: "Fallen Angel",
    blurb: "Driven by vindictive obsession, Morgana...",
    image: "https://example.com/morgana.png",
    info: { attack: 1, defense: 6, magic: 8, difficulty: 1 },
    tags: ["Mage", "Support"],
  },
  {
    id: "sona",
    name: "Sona",
    title: "Maven of the Strings",
    blurb: "Sona has no memories of her true parents...",
    image: "https://example.com/sona.png",
    info: { attack: 5, defense: 2, magic: 8, difficulty: 4 },
    tags: ["Mage", "Support"],
  },
];

describe("filterChampionByTag", () => {
  test("returns all champions if selected tag is empty and search query is empty", () => {
    const result = filterChampionByTag(champions, "", "");
    expect(result).toEqual(champions);
  });

  test("filters champions by selected tag and search query", () => {
    const result = filterChampionByTag(champions, "Mage", "sona");
    expect(result).toEqual([
      {
        id: "sona",
        name: "Sona",
        title: "Maven of the Strings",
        blurb: "Sona has no memories of her true parents...",
        image: "https://example.com/sona.png",
        info: { attack: 5, defense: 2, magic: 8, difficulty: 4 },
        tags: ["Mage", "Support"],
      },
    ]);
  });

  test("returns an empty array if no champions match the filter criteria", () => {
    const result = filterChampionByTag(champions, "Assassin", "Lucian");
    expect(result).toEqual([]);
  });

  test("filters champions case-insensitively by search query", () => {
    const result = filterChampionByTag(champions, "", "Ah");
    expect(result).toEqual([
      {
        id: "ahri",
        name: "Ahri",
        title: "the Nine-Tailed Fox",
        blurb: "Innately connected to the latent power of...",
        image: "https://example.com/ahri.png",
        info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
        tags: ["Mage", "Assassin"],
      },
    ]);

    const result2 = filterChampionByTag(champions, "", "mORgaNA");
    expect(result2).toEqual([
      {
        id: "morgana",
        name: "Morgana",
        title: "Fallen Angel",
        blurb: "Driven by vindictive obsession, Morgana...",
        image: "https://example.com/morgana.png",
        info: { attack: 1, defense: 6, magic: 8, difficulty: 1 },
        tags: ["Mage", "Support"],
      },
    ]);

    const result3 = filterChampionByTag(champions, "", "NoNeXisTent");
    expect(result3).toEqual([]);
  });

  test("returns empty array when no champions match selected tag", () => {
    const result = filterChampionByTag(champions, "Tank", "");
    expect(result).toEqual([]);
  });

  test("returns empty array when no champions match search query", () => {
    const result = filterChampionByTag(champions, "", "x");
    expect(result).toEqual([]);
  });
});
