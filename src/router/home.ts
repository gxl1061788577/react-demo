import React from 'react';

import { route } from 'ts/interfaces';

const Home = React.lazy(() => import('views/home/index'));

const HomeRoute:route[] = [
    {
        path:'/home',
        name:'home',
        title:'首页',
        component:Home,
    }
]

export default HomeRoute;