import { Injectable, inject } from '@angular/core';
import {
  BreedDetailGraphResponse,
  BreedsListGraphResponse,
  ResponseBase,
} from '@interfaces/index';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Observable, take, tap } from 'rxjs';
import {
  DROP_DATA_BASE_MUTATION,
  GET_BREED_DETAIL_QUERY,
  LIST_BREEDS_QUERY,
  SEARCH_BREEDS_QUERY,
} from '@constants/index';

@Injectable({
  providedIn: 'root',
})
export class GraphQlService {
  #apolo = inject(Apollo);

  /**
   * RETORNA LA LISTA DE LAS RAZAS DE LOS GATOS
   * @returns Observable<ApolloQueryResult<{ breeds: BreedsListGraphResponse[] }>>
   */
  getBreedList(): Observable<
    ApolloQueryResult<{ breeds: BreedsListGraphResponse[] }>
  > {
    return this.#apolo
      .watchQuery<{ breeds: BreedsListGraphResponse[] }>({
        query: LIST_BREEDS_QUERY,
      })
      .valueChanges.pipe(
        take(1),
        tap((res) => {
          res.data as { breeds: BreedsListGraphResponse[] };
        })
      );
  }

  /**
   * BUSQUEDA POR CUALQUIER PARAMETRO
   * @returns BreedsListGraphResponse[]
   */
  searchBreedList(
    query: string,
    limit: number = 5
  ): Observable<ApolloQueryResult<{ breeds: BreedsListGraphResponse[] }>> {
    return this.#apolo
      .watchQuery<{ breeds: BreedsListGraphResponse[] }>({
        query: SEARCH_BREEDS_QUERY,
        variables: { query, limit: `${limit}` },
      })
      .valueChanges.pipe(
        take(1),
        tap((res) => {
          res.data as { breeds: BreedsListGraphResponse[] };
        })
      );
  }

  /**
   * RETORNA EL DETALLE DE LA RAZA
   * @returns BreedDetailGraphResponse
   */
  getBreedDetail(
    uuid: string
  ): Observable<ApolloQueryResult<{ breed: BreedDetailGraphResponse }>> {
    return this.#apolo
      .watchQuery<{ breed: BreedDetailGraphResponse }>({
        query: GET_BREED_DETAIL_QUERY,
        variables: { uuid },
      })
      .valueChanges.pipe(
        take(1),
        tap((res) => {
          res.data as { breed: BreedDetailGraphResponse };
        })
      );
  }

  /**
   * RETORNA EL DETALLE DE LA RAZA
   * @returns ResponseBase
   */
  resetDataBase(): Observable<FetchResult<{ response: ResponseBase }>> {
    return this.#apolo
      .mutate<{ response: ResponseBase }>({
        mutation: DROP_DATA_BASE_MUTATION
      }).pipe(
        take(1),
        tap((res) => {
          if (res.data) {
            const response = res.data.response as ResponseBase;
            console.log(response.message);
          }
        })
      );
  }
}
