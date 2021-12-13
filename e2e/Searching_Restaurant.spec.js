Feature('Searching Restaurant');
Before((I) => {
  I.wait(3);
  I.amOnPage('/');
});

Scenario('Searching a Restaurant and founded', (I) => {
  I.wait(3);
  I.seeElement('#search');
  I.fillField('#search', 'jawa');
  I.click('#buttonSearch');

  I.wait(10);
  I.seeElement('.card');
});

Scenario('Searching a Restaurant and not found', (I) => {
  I.wait(3);
  I.seeElement('#search');
  I.fillField('#search', 'jakarta');
  I.click('#buttonSearch');

  I.wait(10);
  I.see('Maaf, data yang anda minta tidak ada', 'h3');
});
