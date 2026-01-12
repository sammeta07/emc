import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'group-register', pathMatch: 'full' },
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
