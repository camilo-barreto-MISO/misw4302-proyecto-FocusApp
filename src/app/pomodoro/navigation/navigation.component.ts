import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';
import { Items } from '../pomodoro.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, ModulosMaterial],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  items: Items = [
    {
      icon: 'list',
      titulo: 'Tareas',
      url: './Tareas',
    },
    {
      icon: 'bar_chart',
      titulo: 'Reportes',
      outlinedIcono: true,
      url: './Reportes',
    },
    {
      icon: 'settings',
      outlinedIcono: true,
      titulo: 'Reportes',
      url: './Configuraciones',
    },
  ];
}
