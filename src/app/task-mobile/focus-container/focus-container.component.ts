import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModulosMaterial } from '../../modulos.material';

@Component({
  selector: 'app-focus-container',
  standalone: true,
  imports: [ModulosMaterial, ReactiveFormsModule],
  templateUrl: './focus-container.component.html',
  styleUrl: './focus-container.component.scss',
})
export class FocusContainerComponent {
  form: FormGroup = new FormGroup({
    hour: new FormControl('25'),
    minute: new FormControl('00'),
  });
}
