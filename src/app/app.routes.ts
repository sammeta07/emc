
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  },
  {
    path: 'groups-dashboard',
    loadChildren: () => import('./groups-dashboard/groups-dashboard.module').then(m => m.GroupsDashboardModule)
  },
    {
    path: 'members-dashboard',
    loadChildren: () => import('./members-dashboard/members-dashboard.module').then(m => m.MembersDashboardModule)
  },
  { path: '**', redirectTo: 'register' }
];
