import DifficultyOrder from "../types/difficultyOrderEnum";
import shuffleArray from "./shuffleDifficultyOptions";

it("should return an array with a single element when given an array of size 1", () => {
  const singleElementArray = [{ label: "Easy", value: 1 }];
  const shuffledArray = shuffleArray(singleElementArray);
  expect(shuffledArray).toEqual(singleElementArray);
});

it("should return an empty array when given an array of size 0", () => {
  const emptyArray: { label: string; value: DifficultyOrder }[] = [];
  const shuffledArray = shuffleArray(emptyArray);
  expect(shuffledArray).toEqual([]);
});

it("should shuffle the options array correctly", () => {
  const options = [
    { label: "Easy", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Hard", value: 3 },
  ];
  // Mock the Math.random() function to return predictable values
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
  const shuffledArray = shuffleArray(options);
  expect(shuffledArray).toEqual(
    expect.arrayContaining([
      { label: "Easy", value: 1 },
      { label: "Medium", value: 2 },
      { label: "Hard", value: 3 },
    ])
  );
});

it("should not modify the original array", () => {
  const options = [
    { label: "Easy", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Hard", value: 3 },
  ];
  const originalOptions = [...options];
  shuffleArray(options);
  expect(options).toEqual(originalOptions);
});

it("should return a shuffled copy of the array, not a reference to the original array", () => {
  const options = [
    { label: "Easy", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Hard", value: 3 },
  ];
  const shuffledArray = shuffleArray(options);
  expect(shuffledArray).toEqual(expect.arrayContaining(options));
  expect(shuffledArray).not.toBe(options);
});
