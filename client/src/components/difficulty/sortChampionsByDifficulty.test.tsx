import DifficultyOrder from "../types/difficultyOrderEnum";
import sortChampionsByDifficulty from "./sortChampionsByDifficulty";

describe("sortChampionsByDifficulty", () => {
  const champions = [
    { info: { difficulty: DifficultyOrder.EASY } },
    { info: { difficulty: DifficultyOrder.MEDIUM } },
    { info: { difficulty: DifficultyOrder.HARD } },
  ];

  test("sorts champions by easy difficulty", () => {
    const sortedChampions = sortChampionsByDifficulty(
      champions,
      DifficultyOrder.EASY
    );
    expect(sortedChampions[0].info.difficulty).toEqual(DifficultyOrder.EASY);
  });

  test("sorts champions by medium difficulty", () => {
    const sortedChampions = sortChampionsByDifficulty(
      champions,
      DifficultyOrder.MEDIUM
    );
    expect(sortedChampions[0].info.difficulty).toEqual(DifficultyOrder.EASY);
    expect(sortedChampions[1].info.difficulty).toEqual(DifficultyOrder.MEDIUM);
    expect(sortedChampions[2].info.difficulty).toEqual(DifficultyOrder.HARD);
  });

  test("sorts champions by hard difficulty", () => {
    const sortedChampions = sortChampionsByDifficulty(
      champions,
      DifficultyOrder.HARD
    );
    expect(sortedChampions[0].info.difficulty).toEqual(DifficultyOrder.HARD);
  });

  test("returns empty array if champions is empty", () => {
    const sortedChampions = sortChampionsByDifficulty(
      [],
      DifficultyOrder.MEDIUM
    );
    expect(sortedChampions).toEqual([]);
  });
});
