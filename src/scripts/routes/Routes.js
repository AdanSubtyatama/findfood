import ListRestaurant from '../views/pages/ListRestaurant';
import Detail from '../views/pages/Detail';
import Search from '../views/pages/Search';
import City from '../views/pages/City';
import Rating from '../views/pages/Rating';
import Favorite from '../views/pages/Favorite';

const routes = {
  '/': ListRestaurant,
  '/list-restaurant': ListRestaurant,
  '/detail/:id': Detail,
  '/search/:id': Search,
  '/city/:id': City,
  '/rating/:id': Rating,
  '/favorite': Favorite,

};
export default routes;
