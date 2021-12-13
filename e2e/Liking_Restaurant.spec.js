const assert = require('assert');

Feature('Liking Restaurant');
Before((I) => {
  I.wait(3);
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorite restaurant', (I) => {
  I.wait(3);
  I.seeElement('#allitem');
  I.see('Anda belum mempunyai restoran Favorite', 'h3');
});

Scenario('Liking a Restaurant and unliking a restaurant', async (I) => {
  I.wait(3);
  I.see('Anda belum mempunyai restoran Favorite', 'h3');
  I.amOnPage('/');
  I.wait(10);
  const firstRestaurant = locate('.card__content__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card__content__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Anda belum mempunyai restoran Favorite', 'h3');
});
