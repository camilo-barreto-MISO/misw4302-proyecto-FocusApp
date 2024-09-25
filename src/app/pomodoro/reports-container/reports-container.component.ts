import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';

@Component({
  selector: 'app-reports-container',
  standalone: true,
  imports: [ModulosMaterial, RouterModule],
  templateUrl: './reports-container.component.html',
  styleUrl: './reports-container.component.scss',
})
export class ReportsContainerComponent {}
