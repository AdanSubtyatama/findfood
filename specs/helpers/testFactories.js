import LikeButtonInitiator from '../../src/scripts/utils/LikeButtonInitiator';
import FavoriteRestaurantIDB from '../../src/scripts/data/FavoriteRestaurantIDB';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButton: document.querySelector('#likeButton'),
    favoriteRestaurants: FavoriteRestaurantIDB,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
