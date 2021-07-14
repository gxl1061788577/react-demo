import React from 'react';

import { route } from 'ts/interfaces';

const Home = React.lazy(() => import('views/home/home'));
const Login  = React.lazy(() => import('views/user/login/login'));
const User  = React.lazy(() => import('views/user/user'));

const HomeRoute:route[] = [
    {
        path:'/main',
        name:'main',
        title:'主体',
        routes:[
            {
                path:'/main/home',
                name:'home',
                title:'首页',
                component:Home,
            },
            {
                path:'/main/login',
                name:'login',
                title:'登录',
                component:Login,
            }
        ]
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
            },
            {
                path:'/extra/user',
                name:'user',
                title:'user',
                component:User,
            }
        ]
    }
]

export default HomeRoute;