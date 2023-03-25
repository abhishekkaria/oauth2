import { environment } from "src/environments/environment";

const redirectUrl = () => {
    return `${environment.authServerUrl}/oauth2/authorize?response_type=code&client_id=user-client&scope=user.write&redirect_uri=${environment.redirectUrl}`;
}

export default redirectUrl;