import { BreedDetailGraphResponse, BreedDetailResponse, BreedsListResponse } from '@interfaces/index';

export const BREEDS_DATA_LIST: BreedsListResponse = {
  uuid: '',
  externalid: '',
  name: '',
  origin: '',
  description: '',
  altNames: '',
  lifeSpan: '',
  referenceImageId: '',
};

export const BREED_DETAIL_MOCK: BreedDetailResponse = {
  id: '',
  url: '',
  temperament: '',
  adaptability: 0,
  childFriendly: 0,
  dogFriendly: 0,
  energyLevel: 0,
  intelligence: 0,
  strangerFriendly: 0,
  socialNeeds: 0,
  wikipediaUrl: '',
  breed: {
    uuid: '',
    externalid: '',
    name: '',
    origin: '',
    description: '',
    altNames: '',
    lifeSpan: '',
    referenceImageId: ''
  }
}

export const BREED_DETAIL_GRAPHQL_MOCK:BreedDetailGraphResponse = {
  id: '',
  url: '',
  intelligence: '',
  adaptability: '',
  energyLevel: '',
  wikipediaUrl: '',
  breed: {
    name: '',
    description: ''
  }
}
