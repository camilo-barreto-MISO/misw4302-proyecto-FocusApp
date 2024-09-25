import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-container',
  standalone: true,
  template: `<div
    class="bg-primary-95 column heigth-100 justify-content-center align-items-center"
  >
    <img width="235" src="/images/focus-app.svg" alt="focus-app" />
    <img
      width="70%"
      src="/images/people-in-office.svg"
      alt="people-in-office"
    />
  </div> `,
})
export class LogoContainerComponent {}
