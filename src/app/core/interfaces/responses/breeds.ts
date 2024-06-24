
export interface BreedsListResponse {
  uuid: string
  externalid: string
  name: string
  origin: string
  description: string
  altNames: string
  lifeSpan: string
  referenceImageId: string
}

export interface BreedDetailResponse {
  id: string
  url: string
  temperament: string
  adaptability: number
  childFriendly: number
  dogFriendly: number
  energyLevel: number
  intelligence: number
  strangerFriendly: number
  socialNeeds: number
  wikipediaUrl: string
  breed: Breed
}

export interface Breed {
  uuid: string
  externalid: string
  name: string
  origin: string
  description: string
  altNames: string
  lifeSpan: string
  referenceImageId: string
}

