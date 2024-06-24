
export interface BreedsListGraphResponse {
  uuid: string
  name: string
  origin: string
  description: string
}

export interface BreedDetailGraphResponse {
  id: string
  url: string
  intelligence: string
  adaptability: string
  energyLevel: string
  wikipediaUrl: string
  breed: {
    name: string
    description: string
  }
}
