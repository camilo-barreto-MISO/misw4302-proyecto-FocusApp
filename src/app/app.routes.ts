import { Routes } from '@angular/router';
import { Capacitor } from '@capacitor/core';

const childrenDesktop = () =>
  import('./admin/admin.routes').then((routes) => routes.AdminRoutes);

const childrenMobile = () =>
  import('./admin-mobile/admin-mobile.routes').then(
    (routes) => routes.AdminMobileRoutes
  );

const children = !Capacitor.isNativePlatform()
  ? childrenMobile
  : childrenDesktop;

export const routes: Routes = [
  {
    path: '',
    loadChildren: children,
  },
];
