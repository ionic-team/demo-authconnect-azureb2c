// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const azureWebConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'azure',
  // The platform which we are running on
  platform: 'web',
  // client or application id for provider
  clientID: '30fa7950-762c-4f67-88cb-c834accdefec',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://vikingsquad.b2clogin.com/vikingsquad.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_Signup_Signin',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/login',
  // requested scopes from provider
  scope: 'openid offline_access email profile https://vikingsquad.onmicrosoft.com/webinar/user_impersonation',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/login',
  // Show provider login in either current window or new tab
  implicitLogin: "CURRENT"
};

export const azureNativeConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'azure',
  // The platform which we are running on
  platform: 'capacitor',
  // client or application id for provider
  clientID: 'b69e2ee7-b67a-4e26-8a38-f7ca30d2e4d4',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://vikingsquad.b2clogin.com/vikingsquad.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_Signup_Signin',
  // the URI to redirect to after log in
  redirectUri: 'io.ionic.demo.ac.azureb2c://login',
  // requested scopes from provider
  scope: 'openid offline_access email profile https://vikingsquad.onmicrosoft.com/webinar/user_impersonation',
  // the URL to redirect to after log out
  logoutUrl: 'io.ionic.demo.ac.azureb2c://login',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private'
};

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
