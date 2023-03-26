const authServerUrl = "http://65.0.26.70:8080"
const  resourceServerUrl = "http://43.205.145.6:8090"

// angular app url
const redirectUrl = "http://oauth2-web.s3-website.ap-south-1.amazonaws.com"

export const environment = {
  production: true,
  authServerUrl:authServerUrl,
  resourceServerUrl : resourceServerUrl,
  demoUrl : resourceServerUrl + '/api/v1/users',
  redirectUrl : redirectUrl + '/authorized'
};