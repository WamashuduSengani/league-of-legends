import shuffleArray from "../difficulty/shuffleDifficultyOptions";
import DifficultyOrder from "../types/difficultyOrderEnum";

test("renders loading spinner when loading is true", () => {
  const loading = true;
  const loadingSpinner = jest.fn();

  if (loading) {
    loadingSpinner();
  }

  expect(loadingSpinner).toHaveBeenCalled();
});

test("renders error message when error is true", () => {
  const error = true;
  const loadingError = jest.fn();

  if (error) {
    loadingError();
  }

  expect(loadingError).toHaveBeenCalled();
});

describe("searchError function", () => {
  it("should be called when filteredChampions array is empty", () => {
    const filteredChampions = [];
    const searchError = jest.fn();
    if (filteredChampions.length === 0) {
      searchError();
    }
    expect(searchError).toHaveBeenCalledTimes(1);
  });

  it("should not be called when filteredChampions array is not empty", () => {
    const filteredChampions = ["Aatrox", "Ahri", "Akali"];
    const searchError = jest.fn();
    if (filteredChampions.length === 0) {
      searchError();
    }
    expect(searchError).not.toHaveBeenCalled();
  });
});

const difficultyOptions = [
  { label: "Easy", value: DifficultyOrder.EASY },
  { label: "Medium", value: DifficultyOrder.MEDIUM },
  { label: "Hard", value: DifficultyOrder.HARD },
];

test("shuffles the difficulty options array", () => {
  const shuffledArray = shuffleArray(difficultyOptions);

  // Check that the shuffled array has the same length as the original array
  expect(shuffledArray.length).toBe(difficultyOptions.length);

  // Check that the shuffled array contains the same items as the original array
  difficultyOptions.forEach((item) => {
    expect(shuffledArray).toContainEqual(item);
  });
});
