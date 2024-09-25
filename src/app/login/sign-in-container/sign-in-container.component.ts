import { Component } from '@angular/core';
import { ModulosMaterial } from '../../modulos.material';
import { LogoContainerComponent } from '../logo-container/logo-container.component';

@Component({
  selector: 'app-sign-in-container',
  standalone: true,
  imports: [LogoContainerComponent, ModulosMaterial],
  templateUrl: './sign-in-container.component.html',
  styleUrl: './sign-in-container.component.scss',
})
export class SignInContainerComponent {}
