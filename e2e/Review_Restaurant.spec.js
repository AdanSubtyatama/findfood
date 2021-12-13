Feature('Review Restaurant');
Before((I) => {
  I.amOnPage('/');
});

Scenario('Review a Restaurant', (I) => {
  I.wait(10);
  const firstRestaurant = locate('.card__content__title').first();
  I.click(firstRestaurant);

  I.fillField('#nameInput', 'e2eAdan');
  I.fillField('#reviewInput', 'fillE2e');
  I.click('#sendReview');
  I.seeElement('.sectiondetail__content__userreview__item');
  I.see('e2eAdan', '.sectiondetail__content__userreview__item div h3');
  I.see('fillE2e', '.sectiondetail__content__userreview__item div p');
});
