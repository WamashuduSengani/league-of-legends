const axios = require('axios');
import { fetchChampions } from "./service";
import { describe, expect, jest, test } from "@jest/globals";

jest.mock('axios');

describe('fetchChampions', () => {
  test('should return an array of champions', async () => {
    const champions = {
      '1': { id: 1, name: 'Annie' },
      '2': { id: 2, name: 'Olaf' },
      '3': { id: 2, name: 'Wamashudu' },
      '4': { id: 2, name: 'SovTech' },
    };
    const response = { data: { data: champions } };
    axios.get.mockResolvedValue(response);

    const result = await fetchChampions();

    expect(result).toEqual(Object.values(champions));
  });

  test('should throw an error if axios.get fails', async () => {
    const error = new Error('Request failed');
    axios.get.mockRejectedValue(error);

    await expect(fetchChampions()).rejects.toThrow('Error fetching champions');
  });
});