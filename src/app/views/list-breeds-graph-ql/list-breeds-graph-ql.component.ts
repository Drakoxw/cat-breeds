import { AsyncPipe, NgTemplateOutlet, SlicePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';

import {
  LoadingComponent,
  ModalComponent,
  PaginationComponent,
  InputSearchComponent,
  BreedDetailGraphQLComponent,
} from '@components/index';
import { BreedGraphQlService } from '@services/index';
import { Subscription } from 'rxjs';
import { FilterBreedsGraphqlTablePipe } from '@pipes/filter-breeds-graphql-table.pipe';

@Component({
  selector: 'app-list-breeds-graph-ql',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    InputSearchComponent,
    FilterBreedsGraphqlTablePipe,
    PaginationComponent,
    SlicePipe,
    ModalComponent,
    BreedDetailGraphQLComponent,
    LoadingComponent,
    AsyncPipe,
  ],
  templateUrl: './list-breeds-graph-ql.component.html',
})
export class ListBreedsGraphQLComponent implements OnInit, OnDestroy {
  readonly breedsService = inject(BreedGraphQlService);

  showModalConfim = false;
  activateLoading = false;
  showModal = false;
  page = 1;
  limit = 5;

  #sub: Subscription[] = [];

  constructor() {
    effect(() => {
      this.breedsService.listBreeds;
    });
  }

  ngOnDestroy(): void {
    this.#sub.forEach(s => s.unsubscribe())
    this.breedsService.onDestroy();
  }

  ngOnInit(): void {
    if (this.breedsService.listBreeds.length === 0) {
      this.breedsService.getListBreeds();
    }
    this.#sub.push(this.breedsService.status$.subscribe(s => {
      if (s == 'LOADING') {
        this.activateLoading = true;
      } else {
        this.activateLoading = false;
      }
    }))
  }

  searchBreed(value: string) {
    if (value === '') {
      return this.breedsService.getListBreeds();
    }
    if (value.length > 3) {
      return this.breedsService.searchBreeds(value);
    }
  }

  onToggleModal(uuid: string = '') {
    this.showModal = !this.showModal;
    if (this.showModal && uuid !== '') {
      this.breedsService.breedDetail(uuid)
    }
  }

  resetDataBase() {
    this.breedsService.resetDB()
    this.onToggleModalConfirm()
  }

  onToggleModalConfirm() {
    this.showModalConfim = !this.showModalConfim;
  }

  next() {
    this.page++;
  }

  prev() {
    this.page--;
  }
}
