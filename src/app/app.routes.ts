import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'group-register',
    loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'group-login',
    loadComponent: () => import('./login/group-login/group-login.component').then(m => m.GroupLoginComponent)
  },
  {
    path: 'member-register',
    loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'member-login',
    loadComponent: () => import('./login/group-login/group-login.component').then(m => m.GroupLoginComponent)
  },
  { path: '**', redirectTo: 'register' }
];
