import { ApolloClient, InMemoryCache } from "@apollo/client";
import { MockLink } from "@apollo/client/testing";
import GET_CHAMPIONS from "./allChampionsQuery";

describe("GET_CHAMPIONS query", () => {
  it("returns the expected data", async () => {
    const champions = [
      {
        id: "1",
        name: "Champion 1",
        title: "The First Champion",
        blurb: "This is the blurb for the first champion.",
        info: {
          attack: 8,
          defense: 4,
          magic: 2,
          difficulty: 6,
        },
        image: "champion1.jpg",
        tags: ["Fighter"],
      },
      {
        id: "2",
        name: "Champion 2",
        title: "The Second Champion",
        blurb: "This is the blurb for the second champion.",
        info: {
          attack: 4,
          defense: 8,
          magic: 6,
          difficulty: 4,
        },
        image: "champion2.jpg",
        tags: ["Mage"],
      },
    ];

    const mockLink = new MockLink([
      {
        request: {
          query: GET_CHAMPIONS,
        },
        result: {
          data: {
            champions,
          },
        },
      },
    ]);

    const client = new ApolloClient({
      link: mockLink,
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({ query: GET_CHAMPIONS });

    expect(data).toEqual({
      champions,
    });
  });
});
