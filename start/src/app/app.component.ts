import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private navController: NavController,
    private platform: Platform
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen } = Plugins;
    if (this.platform.is('hybrid')) {
      await SplashScreen.hide();
    }
  }

  // Handle login status change event
  private handleAuthChange(authenticated: boolean) {
    
  }
}
