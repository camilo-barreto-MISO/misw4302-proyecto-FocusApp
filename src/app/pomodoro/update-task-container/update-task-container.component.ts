import { Component } from '@angular/core';
import { ModulosMaterial } from '../../modulos.material';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-update-task-container',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './update-task-container.component.html',
  styleUrl: './update-task-container.component.scss',
})
export class UpdateTaskContainerComponent {}
