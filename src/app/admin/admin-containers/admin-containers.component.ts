import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-containers',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="display-none-s">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AdminContainersComponent {}
