import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
},
  {
    path:'start',
  loadComponent: () => import('./start/start.component').then(m=> m.default),
  },
  {
   path:'login',
loadComponent: () => import('./auth/pages/login-pages/login-pages.component').then(m=> m.LoginPagesComponent),
}
];
