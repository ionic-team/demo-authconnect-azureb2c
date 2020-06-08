import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const azureNativeConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'auth0',
  // The platform which we are running on
  platform: 'cordova',
  // client or application id for provider
  clientID: 'FILL-IN',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'FILL-IN',
  // the URI to redirect to after log in
  redirectUri: 'FILL-IN',
  // requested scopes from provider
  scope: 'openid offline_access email picture profile',
  // the audience, if applicable
  audience: 'FILL-IN',
  // the URL to redirect to after log out
  logoutUrl: 'FILL-IN',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private'
};

export const azureWebConfig : IonicAuthOptions = {
  // the auth provider
  authConfig: 'auth0',
  // The platform which we are running on
  platform: 'web',
  // client or application id for provider
  clientID: 'FILL-IN',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'FILL-IN',
  // the URI to redirect to after log in
  redirectUri: 'FILL-IN',
  // requested scopes from provider
  scope: 'openid offline_access email picture profile',
  // the audience, if applicable
  audience: 'FILL-IN',
  // the URL to redirect to after log out
  logoutUrl: 'FILL-IN',
  // The type of iOS webview to use. 'shared' will use a webview that can share session/cookies
  // on iOS to provide SSO across multiple apps but will cause a prompt for the user which asks them
  // to confirm they want to share site data with the app. 'private' uses a webview which will not
  // prompt the user but will not be able to share session/cookie data either for true SSO across
  // multiple apps.
  iosWebView: 'private',
  implicitLogin: 'CURRENT'
};

export const environment = {
  production: true
};
