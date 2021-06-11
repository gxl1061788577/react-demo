//路由接口
interface route{
    path:string,
    name:string,
    title:string,
    component?:any,
    routes?:route[],
}

export type {
    route
}