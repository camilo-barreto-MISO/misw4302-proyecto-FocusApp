import { Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { SignInContainerComponent } from './sign-in-container/sign-in-container.component';
import { SignUpContainerComponent } from './sign-up-container/sign-up-container.component';

export const LoginRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        component: SignInContainerComponent,
      },
      {
        path: 'SignUp',
        component: SignUpContainerComponent,
      },
    ],
  },
];
