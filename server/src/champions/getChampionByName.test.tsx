import axios from "axios";
import { fetchChampions, getChampionByName } from "./service";
import { describe, expect, jest, test } from "@jest/globals";

describe("getChampionByName", () => {
  test("returns champion object for valid name", async () => {
    const champion = await getChampionByName("Ahri");
    expect(champion).toBeDefined();
    expect(champion?.name).toBe("Ahri");
  });

  test("returns null for invalid name", async () => {
    const champion = await getChampionByName("InvalidName");
    expect(champion).toBeNull();
  });

  test("fetchChampions throws an error when API call fails", async () => {
    // Mock axios to return a rejected promise
    jest.spyOn(axios, "get").mockRejectedValue(new Error("API call failed"));

    // Call the fetchChampions function and expect it to throw an error
    await expect(fetchChampions()).rejects.toThrow("Error fetching champions");
  });
});
