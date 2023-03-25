import { environment } from "src/environments/environment";


const demoUrl = (userId:string) => {
    return `${environment.demoUrl}/${userId}`;
}

export default demoUrl;