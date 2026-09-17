import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from '../app/features/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../app/features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/users/users.component').then(
            (m) => m.UsersComponent,
          ),
      },
      {
        path: 'users/:id',
        loadComponent: () =>
          import('./features/users/user-details/user-details.component').then(
            (m) => m.UserDetailsComponent,
          ),
      },
      {
        path: 'addUsers',
        loadComponent: () =>
          import('./features/users/add-users/add-users.component').then(
            (m) => m.AddUsersComponent,
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../app/features/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },
      {
        path: 'charts',
        loadComponent: () =>
          import('../app/features/charts/charts.component').then(
            (m) => m.ChartsComponent,
          ),
      },
    ],
  },
];
