import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulosMaterial } from '../../modulos.material';
import { LogoContainerComponent } from '../logo-container/logo-container.component';

@Component({
  selector: 'app-sign-up-container',
  standalone: true,
  imports: [LogoContainerComponent, ModulosMaterial, RouterModule],
  templateUrl: './sign-up-container.component.html',
  styleUrl: './sign-up-container.component.scss',
})
export class SignUpContainerComponent {}
