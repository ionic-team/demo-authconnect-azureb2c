import { Injectable } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';
import { Subject, Observable } from 'rxjs';
import { azureNativeConfig, azureWebConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends IonicAuth {

  // Emit event when login status changes 
  private _loginStatusChanged: Subject<boolean>;
  get loginStatusChanged(): Observable<boolean> {
    return this._loginStatusChanged.asObservable();
  }

  constructor(platform: Platform) {
    // Determine whether to run on mobile or the web
    const selectedConfig = platform.is('hybrid') ? azureNativeConfig : azureWebConfig;
    super(selectedConfig);
    
    this._loginStatusChanged = new Subject();
  }

  async login(): Promise<void> {
    try {
      await super.login();

      this._loginStatusChanged.next(true);
    } catch (err) {
      // Handle the password reset case for Azure AD
      console.log('login error:', + err);
      const message: string = err.message;
      // This is the error code returned by the Azure AD servers on failure.
      if (message !== undefined && message.startsWith('AADB2C90118')) {
        // The address you pass back is the custom user flow (policy) endpoint
        await super.login(
          'https://vikingsquad.b2clogin.com/vikingsquad.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_password_reset'
        );
      } else {
        throw new Error(err.error);
      }
    }
  }

  onLoginSuccess() {
    // Web only: Using "current window" sign-in, 
    this._loginStatusChanged.next(true);
  }

  onLogout() {
    this._loginStatusChanged.next(false);
  }

  async getUserInfo() {
    const idToken = await this.getIdToken();
    if (!idToken) {
      return;
    }

    let email = idToken.email;
    if (idToken.emails instanceof Array) {
      email = idToken.emails[0];
    }

    return {
      id: idToken.sub,
      email: email,
      firstName: idToken.given_name,
      lastName: idToken.family_name,
      picture: "assets/user-placeholder.jpg"
    };
  }
}
