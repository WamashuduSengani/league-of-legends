const axios = require("axios");
const { URL } = require("url");
require("dotenv").config();

const api_url = new URL(process.env.API_URL);
const image_url = new URL(process.env.IMAGE_URL);
// const url = {
//   api_url: process.env.API_URL,
//   image_url: process.env.IMAGE_URL
// }

// Champion object shape and its properties
interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
  };
  tags: string[];
}

// Fetching champion data from the API and returning an array of Champion objects
async function fetchChampions(): Promise<Champion[]> {
  try {
    const response = await axios.get(api_url.href);
    const champions: Champion[] = Object.values(response.data.data);
    return champions;
  } catch (error) {
    if (error.message) {
      throw new Error(`Error fetching champions: ${error.message}`);
    } else {
      console.error(error);
    }
    throw new Error("Error fetching champions");
  }
}

// Mapping Champion object to a simplified object with only the data queried
function mapChampion(champion: Champion): any {
  return {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    blurb: champion.blurb,
    info: champion.info,
    image: `${image_url.href}/${champion.image.full}`,
    tags: champion.tags,
  };
}

// Filter champions by name
async function getChampionByName(name: string): Promise<Champion | null> {
  try {
    const response = await axios.get(api_url);
    const championData: Record<string, Champion> = response.data.data;
    const champion = Object.values(championData).find(
      (champion) => champion.name.toLowerCase() === name.toLowerCase()
    );
    return champion || null;
  } catch (error) {
    console.error(`Error fetching champion ${name}: ${error}`);
    throw new Error(`Error fetching champion ${name}`);
  }
}

export { fetchChampions, mapChampion, getChampionByName };
