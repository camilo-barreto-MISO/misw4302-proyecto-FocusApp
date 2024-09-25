import { Routes } from '@angular/router';
import { AdminContainersComponent } from './admin-containers/admin-containers.component';

export const AdminMobileRoutes: Routes = [
  {
    path: '',
    component: AdminContainersComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../task-mobile/task-mobile.routes').then(
            (routes) => routes.TaskMobileRoutes
          ),
      },
    ],
  },
];
