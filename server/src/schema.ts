const { gql } = require("apollo-server");

const typeDefs = gql`
  "A champion is a character in the League of Legends"
  type Champion {
    id: ID!
    "The champion's name"
    name: String!
    "The champion's title"
    title: String!
    "A short description of the champion"
    blurb: String!
    "The champion's combat attributes"
    info: ChampionInfo!
    "The champion's picture"
    image: String!
    "The champion's tags"
    tags: [String!]!
  }

  "Combat attributes of a champion"
  type ChampionInfo {
    "Attack power of the champion"
    attack: Int!
    "Defensive power of the champion"
    defense: Int!
    "Magical power of the champion"
    magic: Int!
    "Difficulty rating of the champion"
    difficulty: Int!
  }

  type Query {
    "Get all the champions in League of Legends"
    champions: [Champion!]!
    "Get a champion by name"
    champion(name: String!): Champion
  }
`;

export default typeDefs;
