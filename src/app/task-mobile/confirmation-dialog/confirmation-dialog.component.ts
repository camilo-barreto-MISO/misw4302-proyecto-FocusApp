import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [ModulosMaterial, RouterModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {}
