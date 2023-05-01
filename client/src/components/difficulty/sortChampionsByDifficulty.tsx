import DifficultyOrder from "../types/difficultyOrderEnum";

function sortChampionsByDifficulty(
  champions: any[],
  difficultyOrder: DifficultyOrder
): any[] {
  const mediumDifficulty = (DifficultyOrder.EASY + DifficultyOrder.HARD) / 2;

  return champions.sort((championA, championB) => {
    const difficultyA = championA.info.difficulty;
    const difficultyB = championB.info.difficulty;

    if (difficultyOrder === DifficultyOrder.EASY) {
      return difficultyA - difficultyB;
    } else if (difficultyOrder === DifficultyOrder.MEDIUM) {
      if (
        (difficultyA < mediumDifficulty && difficultyB < mediumDifficulty) ||
        (difficultyA >= mediumDifficulty && difficultyB >= mediumDifficulty)
      ) {
        return difficultyA - difficultyB;
      } else {
        return difficultyA < mediumDifficulty ? -1 : 1;
      }
    } else if (difficultyOrder === DifficultyOrder.HARD) {
      return difficultyB - difficultyA;
    } else {
      return 0;
    }
  });
}

export default sortChampionsByDifficulty;
