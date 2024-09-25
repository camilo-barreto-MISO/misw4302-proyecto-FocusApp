import { Routes } from '@angular/router';
import { AdminContainersComponent } from './admin-containers/admin-containers.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    component: AdminContainersComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../login/login.routes').then((routes) => routes.LoginRoutes),
      },
      {
        path: 'Pomodoro',
        loadChildren: () =>
          import('../pomodoro/pomodoro.routes').then(
            (routes) => routes.PomodoRoutes
          ),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
