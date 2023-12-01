import Beranda from '../views/pages/beranda';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
