import { Routes } from '@angular/router';
import { LoginPagesComponent } from './auth/pages/login-pages/login-pages.component';

export const routes: Routes = [
  { path: 'login', component: LoginPagesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];
