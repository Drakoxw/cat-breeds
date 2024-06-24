import { gql } from 'apollo-angular';

export const SEARCH_BREEDS_QUERY = gql`
  query SearchBreeds($query: String!, $limit: String!) {
    breeds: searchBreedList(query: $query, limit: $limit) {
      uuid
      name
      origin
    }
  }
`;

export const GET_BREED_DETAIL_QUERY = gql`
  query GetBreedDetail($uuid: String!) {
    breed: getBreedDetail(uuid: $uuid) {
      id,
      url,
      intelligence,
      adaptability,
      energyLevel,
      wikipediaUrl,
      breed {
        name,
        description,
      }
    }
  }
`;

export const LIST_BREEDS_QUERY = gql`
  {
    breeds: getBreedList {
      uuid
      name
      origin
      description
    }
  }
`;
