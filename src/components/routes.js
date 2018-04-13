import Index from './templates/pages/index';

import Login from './templates/pages/login';
import NotFound from './routes/NotFound';

import AuthHoc from './HOC/authHoc';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default Routes;
