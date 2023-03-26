// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const authServerUrl = "http://65.0.26.70:8080"
const  resourceServerUrl = "http://43.205.145.6:8090"

// angular app url
const redirectUrl = "http://oauth2-web.s3-website.ap-south-1.amazonaws.com"

export const environment = {
  production: false,
  authServerUrl:authServerUrl,
  resourceServerUrl : resourceServerUrl,
  demoUrl : resourceServerUrl + '/api/v1/users',
  redirectUrl : redirectUrl + '/authorized'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
