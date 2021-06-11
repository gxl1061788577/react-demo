import React from 'react';

import { route } from 'ts/interfaces';

const Home = React.lazy(() => import('views/home/home'));
const Login  = React.lazy(() => import('views/user/login/login'))

const HomeRoute:route[] = [
    {
        path:'/home',
        name:'home',
        title:'首页',
        component:Home,
    },
    {
        path:'/extra',
        name:'extra',
        title:'服务',
        routes:[
            {
                path:'/extra/login',
                name:'login',
                title:'登录',
                component:Login,
            }
        ]
    }
]

export default HomeRoute;