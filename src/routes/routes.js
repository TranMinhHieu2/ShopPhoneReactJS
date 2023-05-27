
import config from '~/config';
// Layouts
import { HeaderOnly } from '~/layouts';

import Home from '~/page/Home';
import Product from '~/page/Product';
import Upload from '~/page/Upload';
import Search from '~/page/Search';
import Cart from '~/page/Cart';
import Login from '~/page/Login';



const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];



const privateRoutes = []

export { publicRoutes, privateRoutes }