import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';
interface Tarea {
  nombre: string;
}

@Component({
  selector: 'app-task-list-container',
  standalone: true,
  imports: [ModulosMaterial, RouterModule],
  templateUrl: './task-list-container.component.html',
  styleUrl: './task-list-container.component.scss',
})
export class TaskListContainerComponent {
  isToday = true;
  listadoTareas: Tarea[] = [
    {
      nombre: 'Tarea 1',
    },
    {
      nombre: 'Tarea 2',
    },
    {
      nombre: 'Tarea 3',
    },
  ];

  get textNavigation() {
    return this.isToday ? 'Hoy' : 'Mañana';
  }

  seeToday(isToday: boolean) {
    this.isToday = isToday;
  }
}
