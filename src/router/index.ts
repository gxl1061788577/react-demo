interface route{
    path:string,
    name:string,
    title:string,
    component:any,
}

const router:route[] = [
    ...require('router/home'),
]

export default router;