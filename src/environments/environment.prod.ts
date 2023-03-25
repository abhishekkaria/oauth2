const authServerUrl = "http://192.168.0.103:8080"
const  resourceServerUrl = "http://192.168.0.103:8090"

// angular app url
const redirectUrl = "http://192.168.0.104:4200"

export const environment = {
  production: true,
  authServerUrl:authServerUrl,
  resourceServerUrl : resourceServerUrl,
  demoUrl : resourceServerUrl + '/api/v1/users',
  redirectUrl : redirectUrl + '/authorized'
};