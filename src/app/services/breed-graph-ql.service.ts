import { Injectable, inject } from '@angular/core';
import { BreedDetailGraphResponse, BreedsListGraphResponse, StatusServices } from '@interfaces/index';
import { GraphQlService } from './graph-ql.service';
import { ToastAlertService } from './toast-alert.service';
import { Subject, Subscription } from 'rxjs';
import { patchState, signalState } from '@ngrx/signals';
import { BREED_DETAIL_GRAPHQL_MOCK } from '@mocks/index';

interface State {
  loading: boolean;
  omiteAlert: boolean;
  listBreeds: BreedsListGraphResponse[];
  breedDetail: BreedDetailGraphResponse;
}

@Injectable({
  providedIn: 'root'
})
export class BreedGraphQlService {

  #graphQLService = inject(GraphQlService);
  #toastService = inject(ToastAlertService);

  status$: Subject<StatusServices> = new Subject();

  #state = signalState<State>({
    loading: false,
    omiteAlert: false,
    listBreeds: [],
    breedDetail: BREED_DETAIL_GRAPHQL_MOCK,
  });


  #subs: Subscription[] = [];

  readonly loading = this.#state.loading;
  readonly omiteAlert = this.#state.omiteAlert;
  readonly listBreeds = this.#state.listBreeds;
  readonly breed = this.#state.breedDetail;


  getListBreeds() {
    if (this.loading() && !this.omiteAlert()) {
      return this.#toastService.warning('Se estan cargando los datos');
    }
    this.status$.next('LOADING');
    patchState(this.#state, { loading: true });
    this.#subs[0] = this.#graphQLService.getBreedList().subscribe({
      next: (r) => {
        patchState(this.#state, { loading: false });
        if (r.data) {
          patchState(this.#state, { listBreeds: r.data.breeds ?? [] });
          this.status$.next('SUCCESS');
        } else {
          this.status$.next('ERROR');
          return this.#toastService.error("Ocurrio un error inesperado");
        }
      },
      complete: () => {
        this.status$.next('');
      },
    });
  }

  searchBreeds(query: string, limit: number = 5) {
    this.status$.next('LOADING');
    patchState(this.#state, { loading: true, omiteAlert: true });
    this.#subs[1] = this.#graphQLService.searchBreedList(query, limit).subscribe({
      next: (r) => {
        patchState(this.#state, { loading: false, omiteAlert: true });
        if (r.data) {
          patchState(this.#state, { listBreeds: r.data.breeds ?? [] });
          this.status$.next('SUCCESS');
        } else {
          this.status$.next('ERROR');
        }
      },
      complete: () => {
        this.status$.next('');
      },
    });
  }

  breedDetail(uuid: string) {
    if (this.loading()) {
      return this.#toastService.warning(
        'Se estan buscando los detalles de la raza'
      );
    }
    this.status$.next('LOADING');
    patchState(this.#state, { loading: true });
    this.#subs[2] = this.#graphQLService.getBreedDetail(uuid).subscribe({
      next: (r) => {
        patchState(this.#state, { loading: false });
        if (r) {
          patchState(this.#state, { breedDetail: r.data.breed });
          this.status$.next('SUCCESS');
        } else {
          this.status$.next('ERROR');
          return this.#toastService.error("Ocurrio un error inessperado");
        }
      },
      complete: () => {
        this.status$.next('');
      },
    });
  }

  resetDB() {
    if (this.loading()) {
      return this.#toastService.warning(
        'Se estan buscando otros datos en este momento'
      );
    }
    this.#toastService.info('Reiniciando la base de datos')
    patchState(this.#state, { listBreeds: [] });
    this.status$.next('LOADING');
    patchState(this.#state, { loading: true });
    this.#subs[3] = this.#graphQLService.resetDataBase().subscribe({
      next: (r) => {
        patchState(this.#state, { loading: false });
        this.getListBreeds();
        this.#toastService.success('La base de datos ha sido actualizada!')
      },
      complete: () => {
        this.status$.next('');
      },
    });
  }

  clearBreed(): void {
    patchState(this.#state, { breedDetail: BREED_DETAIL_GRAPHQL_MOCK });
  }

  onDestroy(): void {
    this.#subs.map((sub) => sub.unsubscribe());
  }
}
