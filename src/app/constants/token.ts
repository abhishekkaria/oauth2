import { environment } from "src/environments/environment";


const tokenUrl = (code: string) => {
    const redirectUrl = `${environment.redirectUrl}&grant_type=authorization_code&code=${code}&code_verifier=qPsH306-ZDDaOE8DFzVn05TkN3ZZoVmI_6x4LsVglQI`;
    return `${environment.authServerUrl}/oauth2/token?client_id=client&redirect_uri=${redirectUrl}`;
};

export default tokenUrl;