import { gql } from "@apollo/client";

const GET_CHAMPIONS = gql`
  query GetChampions {
    champions {
      id
      name
      title
      blurb
      info {
        attack
        defense
        magic
        difficulty
      }
      image
      tags
    }
  }
`;

export default GET_CHAMPIONS;
