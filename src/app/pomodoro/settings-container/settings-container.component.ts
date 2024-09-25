import { Component } from '@angular/core';
import { ModulosMaterial } from '../../modulos.material';

@Component({
  selector: 'app-settings-container',
  standalone: true,
  imports: [ModulosMaterial],
  templateUrl: './settings-container.component.html',
  styleUrl: './settings-container.component.scss',
})
export class SettingsContainerComponent {}
