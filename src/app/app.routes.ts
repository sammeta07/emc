import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'register',
    loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'group-login',
    loadComponent: () => import('./login/group-login/group-login.component').then(m => m.GroupLoginComponent)
  },
  { path: '**', redirectTo: 'register' }
];
