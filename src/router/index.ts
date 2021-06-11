import { route } from 'ts/interfaces';
import Home from 'router/home';

const router:route[] = [
    ...Home,
]

// function changeRouteConfig(arr:route[],node?:any){
//     for(let i=0,len=arr.length;i<len;i++){

//     }
// }

export default router;