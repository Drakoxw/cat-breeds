import { Routes } from '@angular/router';
import { LayoutComponent } from '@components/layout/layout.component';

import { HomeComponent, ListBreedsComponent, ListBreedsGraphQLComponent } from '@views/index';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'list-breeds', component: ListBreedsGraphQLComponent },
      { path: 'list-breeds-simple', component: ListBreedsComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
