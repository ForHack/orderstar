import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/index';

export const featuresRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-page/home-page.routes').then(c => c.homePageRoutes),
      },
    ],
  },
];
