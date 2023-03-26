const authServerUrl = "http://13.233.197.217:8080"
const  resourceServerUrl = "http://15.206.145.162:8090"

// angular app url
const redirectUrl = "http://oauth2-web.s3-website.ap-south-1.amazonaws.com"

export const environment = {
  production: true,
  authServerUrl:authServerUrl,
  resourceServerUrl : resourceServerUrl,
  demoUrl : resourceServerUrl + '/api/v1/users',
  redirectUrl : redirectUrl + '/authorized'
};