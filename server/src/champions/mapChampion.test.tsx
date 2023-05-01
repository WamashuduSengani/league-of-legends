import { describe, expect, test } from "@jest/globals";
import { mapChampion } from "./service";

describe("mapChampion", () => {
  test("maps a champion object to a new object with the expected properties", () => {
    const champion = {
      id: "Aatrox",
      name: "Aatrox",
      title: "the Darkin Blade",
      blurb:
        "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery.",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4,
      },
      image: {
        full: "Aatrox.png",
      },
      tags: ["Fighter", "Tank"],
    };

    const mappedChampion = mapChampion(champion);

    expect(mappedChampion).toEqual({
      id: "Aatrox",
      name: "Aatrox",
      title: "the Darkin Blade",
      blurb:
        "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery.",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4,
      },
      image: "http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/Aatrox.png",
      tags: ["Fighter", "Tank"],
    });
  });
});
