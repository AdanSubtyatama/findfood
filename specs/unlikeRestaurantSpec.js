import FavoriteRestaurantIDB from '../src/scripts/data/FavoriteRestaurantIDB';
import * as TestFactories from './helpers/testFactories';

const addLikeButton = () => {
  document.body.innerHTML = '<button id="likeButton" tabindex="0"></button>';
};

describe('Unlike A Restaurant', () => {
  beforeEach(async () => {
    addLikeButton();
    await FavoriteRestaurantIDB.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIDB.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIDB.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIDB.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIDB.getAllRestaurants()).toEqual([]);
  });
});
