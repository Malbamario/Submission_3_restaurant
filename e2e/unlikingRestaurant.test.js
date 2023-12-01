/* eslint-disable no-undef */
Feature('Unliking a Restaurant');

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(0.5);
  I.seeElement(locate('restaurant-list').find('li a restaurant-item'));

  const firstRestaurant = locate('restaurant-list li').first();
  const firstRestaurantTarget = await I.grabTextFrom(locate(firstRestaurant).find('a restaurant-item .text h2'));

  I.click(locate(firstRestaurant).find('a'));

  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.click(locate(firstRestaurant).find('a'));
  I.wait(1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement(locate('#postExplore').find(firstRestaurantTarget));
});
