import { Routes } from '@angular/router';
import { AddTaskContainerComponent } from './add-task-container/add-task-container.component';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { ReportsContainerComponent } from './reports-container/reports-container.component';
import { SettingsContainerComponent } from './settings-container/settings-container.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { UpdateTaskContainerComponent } from './update-task-container/update-task-container.component';

export const PomodoRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: 'Tareas',
        children: [
          {
            path: '',
            component: TaskListContainerComponent,
          },
          {
            path: 'EditarTarea',
            component: UpdateTaskContainerComponent,
          },
        ],
      },
      {
        path: 'AgregarTarea',
        component: AddTaskContainerComponent,
      },
      {
        path: 'Reportes',
        component: ReportsContainerComponent,
      },
      {
        path: 'Configuraciones',
        component: SettingsContainerComponent,
      },
    ],
  },
];
