import config from '~/config';

//Layouts
import { HeaderOnly } from '~/layouts';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Friends from '~/Pages/Friends';
import Explore from '~/Pages/Explore';
import Live from '~/Pages/Live';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
