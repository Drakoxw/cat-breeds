import { Routes } from '@angular/router';
import { LayoutComponent } from '@components/layout/layout.component';

import { HomeComponent, ListBreedsComponent } from '@views/index';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'list-breeds', component: ListBreedsComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
