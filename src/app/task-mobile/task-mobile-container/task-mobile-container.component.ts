import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';

@Component({
  selector: 'app-task-mobile-container',
  standalone: true,
  imports: [ModulosMaterial, RouterModule],
  templateUrl: './task-mobile-container.component.html',
  styleUrl: './task-mobile-container.component.scss',
})
export class TaskMobileContainerComponent {}
