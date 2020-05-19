# Demo: Ionic Auth Connect with Azure AD B2C

This is a reference app for building a login/logout experience with Ionic Auth Connect and Azure AD B2C.

To see this app in action, check out the [Capacitor 2.0 Launch presentation](https://ionicframework.com/resources/webinars/capacitor-2-launch).

## User Experience

Demo video 👇

(coming soon)

[Ionic Auth Connect](https://ionicframework.com/auth-connect) is used to implement a simple login/logout experience (with Azure AD B2C as the authentication provider) that works on the web, iOS, and Android. [Capacitor](https://capacitor.ionicframework.com) is used to deploy the app to a mobile device.

## Implementation Details

This is a modified version of the Ionic `blank` starter project. Major components include:

* The Home page (`src/app/home`). Displays the signed-in user's details (retrieved from Azure). Includes a button to log out of the app.
* The Login page (`src/app/login`). Protects the Home page from unauthorized access. User must sign in first via this page using Auth Connect.
* The AuthenticationService class (`src/app/services/authentication.service.ts`). The login/logout implementation using Auth Connect and Azure AD B2C.
* Auth Connect configuration details in environment files (`src/environments/`). Web and Native configurations for Azure AD B2C.

### Ionic components

* `<ion-button>`: [Buttons](https://ionicframework.com/docs/api/button) for logging in and out of the app.
* `<ion-loading>`: A [loading indicator](https://ionicframework.com/docs/api/loading) displayed when login begins.

## How to Run

NOTE: This app requires an [Ionic Native Enterprise Edition](https://ionicframework.com/docs/enterprise) key in order to install and use the Ionic Auth Connect plugin. Ionic Native EE includes a reliable set of Native Solutions for Ionic apps, quality controlled and maintained by the Ionic Team. If you are interested in acquiring a key or learning more, please [contact us here](https://ionicframework.com/enterprise/contact).

- Setup your Ionic app for Ionic Native EE [first here](https://ionicframework.com/docs/enterprise/setup).
- If not already installed, install Ionic and native-run: `npm install -g @ionic/cli native-run`.
- Clone this repository.
- In a terminal, change directory into the repo: `cd demo-authconnect-azureb2c`.
- Run `npm install`. NOTE: This will fail if an Ionic Native key hasn't been registered.
- Replace values in Environment file (`src/environments/environment.ts`) with your own Azure AD B2C configuration details.
- Run `ionic serve` to view the app in a browser.

## Resources

* [Auth Connect documentation](https://ionicframework.com/docs/enterprise/auth-connect)
* [Azure AD B2C configuration](https://ionicframework.com/docs/enterprise/auth-connect/azure-ad-b2c)
