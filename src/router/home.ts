interface route{
    path:string,
    name:string,
    title:string,
    component:any,
}
const Home = () => require('views/home');

const HomeRoute:route[] = [
    {
        path:'/home',
        name:'home',
        title:'首页',
        component:Home,
    }
]

export default HomeRoute;