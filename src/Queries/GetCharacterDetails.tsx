import { gql } from "@apollo/client";

export interface CharacterDetails {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: {
        id: string;
        name: string;
    };
    location: {
        id: string,
        name: string,
    };
}

export const LOAD_CHARACTER_DETAILS = gql`
query GetCharacterDetails($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
      }
      location {
        id
        name
      }
      image
    }
  }
`;
