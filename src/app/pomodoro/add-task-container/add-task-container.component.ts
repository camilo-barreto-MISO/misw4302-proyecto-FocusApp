import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-add-task-container',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './add-task-container.component.html',
  styleUrl: './add-task-container.component.scss',
})
export class AddTaskContainerComponent {}
