import { gql } from "@apollo/client";


export interface Episode {
    id: string;
    name: string;
    episode: string;
    air_date: string;
    characters: Character[];
}
  
  export interface EpisodesData {
    episodes: {
      results: Episode[];
    };
}

export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  origin: Origin[];
  location: Location[];
  image: string;
  gender: string;
  type: string;
}

export interface Origin {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  name: string;
}

export const LOAD_EPISODES = gql `
query {
  episodes(filter: {episode: "S04"}) {
    results {
      id
      name
      episode
      air_date
      characters{
        id
        name
        species
        status
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  }
}
`
