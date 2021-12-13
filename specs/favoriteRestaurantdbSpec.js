import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIDB from '../src/scripts/data/FavoriteRestaurantIDB'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIDB);
});
