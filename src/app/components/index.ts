import { BreedDetailGraphQLComponent } from './breed-detail-graph-ql/breed-detail-graph-ql.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { FooterComponent } from './footer/footer.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';

export const Components: any[] = [
  NavBarComponent,
  LayoutComponent,
  FooterComponent,
  InputSearchComponent,
  BreedDetailComponent,
  LoadingComponent,
  ModalComponent,
  PaginationComponent,
  BreedDetailGraphQLComponent
];

export * from './nav-bar/nav-bar.component';
export * from './layout/layout.component';
export * from './footer/footer.component';
export * from './input-search/input-search.component';
export * from './breed-detail/breed-detail.component';
export * from './loading/loading.component';
export * from './modal/modal.component';
export * from './pagination/pagination.component';
export * from './breed-detail-graph-ql/breed-detail-graph-ql.component';
