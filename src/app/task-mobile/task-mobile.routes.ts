import { Routes } from '@angular/router';

import { FocusContainerComponent } from './focus-container/focus-container.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { TaskMobileContainerComponent } from './task-mobile-container/task-mobile-container.component';

export const TaskMobileRoutes: Routes = [
  {
    path: '',
    component: TaskMobileContainerComponent,
    children: [
      {
        path: 'Focus',
        component: FocusContainerComponent,
      },
      {
        path: 'Tareas',
        component: TaskListContainerComponent,
      },
      {
        path: '**',
        redirectTo: 'Focus',
        pathMatch: 'full',
      },
    ],
  },
];
