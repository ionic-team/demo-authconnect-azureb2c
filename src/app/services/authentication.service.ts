import { Injectable } from '@angular/core';
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {
  private router: Router;

  constructor(platform: Platform, router: Router) {
    // Determine whether to run on mobile or the web
    const selectedConfig = platform.is('cordova') ? auth0CordovaConfig : auth0WebConfig;
    super(selectedConfig);
    this.router = router;
  }

  async getUserInfo() {
    return await super.getIdToken();
  }

  onLoginSuccess() {
    this.router.navigate(['home']);
  }

  onLogout() {
    this.router.navigate(['login']);
  }
}
