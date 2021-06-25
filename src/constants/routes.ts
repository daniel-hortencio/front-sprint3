import Home from '../pages/home';
import PageNotFound from '../pages/404';
import { RouteTypes } from '../types/routeTypes'

export const routes: Array<RouteTypes> = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        component: PageNotFound,
    },
];
