import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-admin-container',
  standalone: true,
  imports: [RouterModule, ModulosMaterial, NavigationComponent],
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.scss',
})
export class AdminContainerComponent {}
