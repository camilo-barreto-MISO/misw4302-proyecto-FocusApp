import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    this.showSplash();
  }
  async showSplash() {
    await SplashScreen.show({
      autoHide: true,
      showDuration: 3000,
    });
  }
}
