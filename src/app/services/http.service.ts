import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { URL_API_BASE } from '@constants/common';
import { BreedDetailResponse, BreedsListResponse, ErrorResponse } from '@interfaces/index';
import { BREEDS_DATA_LIST, BREED_DETAIL_MOCK } from '@mocks/index';
import { Observable, catchError, debounceTime, map, of, switchMap } from 'rxjs';
import { httpErrorHandler } from '../core/utils/errorCatch';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient);

  /**
   * RETORNA LA LISTA DE LAS RAZAS DE LOS GATOS
   * @returns BreedsListResponse[]
   */
  getBreedList(): Observable<{
    error: boolean;
    msg: string;
    data?: BreedsListResponse[]
  }> {
    const res = { error: true, msg: 'No se optuvieron datos del servicio', data: [BREEDS_DATA_LIST] };
    return this.http.get<BreedsListResponse[]>(`${URL_API_BASE}/api/breeds`).pipe(
      map((r) => {
        if (r.length === 0) {
          return res;
        }
        res.error = false;
        res.msg = 'Datos encontrados!';
        res.data = r;
        return res
      }),
      catchError(httpErrorHandler),
    );
  }

  /**
   * BUSQUEDA POR CUALQUIER PARAMETRO
   * @returns BreedsListResponse[]
   */
  searchBreedList(query: string, limit: number = 5): Observable<{
    error: boolean;
    msg: string;
    data?: BreedsListResponse[];
  }> {
    const res = { error: true, msg: 'No se obtuvieron datos del servicio', data: [BREEDS_DATA_LIST],};
    return of(query).pipe(
      debounceTime(600),
      switchMap((q) =>
        this.http
          .get<BreedsListResponse[]>(`${URL_API_BASE}/api/breeds/search?value=${q}&limit=${limit}`)
          .pipe(
            map((r) => {
              if (r.length === 0) { return res;}
              res.error = false;
              res.msg = 'Datos encontrados!';
              res.data = r;
              return res
            }),
            catchError(() => {
              return of(res);
            })
          )
      )
    );
  }

  /**
   * RETORNA EL DETALLE DE LA RAZA
   * @returns BreedDetailResponse
   */
  getBreedDetail(uuid: string): Observable<{
    error: boolean;
    msg: string;
    data?: BreedDetailResponse
  }> {
    const res = { error: true, msg: 'No se optuvieron datos del servicio', data: BREED_DETAIL_MOCK };
    return this.http.get<BreedDetailResponse>(`${URL_API_BASE}/api/breeds/breed-id/${uuid}`).pipe(
      map((r) => {
        if (!r) {
          return res;
        }
        res.error = false;
        res.msg = 'Datos encontrados!';
        res.data = r;
        return res
      }),
      catchError(httpErrorHandler),
    );
  }

  /**
   * ACTUALIZA LA BASE DE DATOS CON LA LISTA DE LAS RAZAS DE LOS GATOS
   */
  resetDataBase(): Observable<{
    error: boolean;
    msg: string;
  }> {
    const res = { error: true, msg: 'No se pudo actualizar la base de datos' };
    return this.http.post<ErrorResponse>(`${URL_API_BASE}/api/breeds`, {}).pipe(
      map((r) => {
        if (!r.success) {
          return res;
        }
        res.error = false;
        res.msg = 'Datos actualizados!';
        return res
      }),
      catchError(httpErrorHandler),
    );
  }

}
