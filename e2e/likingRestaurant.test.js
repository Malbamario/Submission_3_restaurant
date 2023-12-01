/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.see('No Favorite Restaurants', 'h1');
  I.seeElementInDOM('#postExplore');
  I.dontSeeElement(locate('#postExplore').find('li'));
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.see('No Favorite Restaurants', 'h1');

  I.amOnPage('/');
  I.waitForElement(locate('restaurant-list').find('li a restaurant-item'));
  I.seeElement(locate('restaurant-list').find('li a restaurant-item'));

  const firstRestaurant = locate('restaurant-list li').first();
  const firstRestaurantTarget = await I.grabTextFrom(locate(firstRestaurant).find('a restaurant-item .text h2'));

  I.click(locate(firstRestaurant).find('a'));

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement(locate('restaurant-item'));
  const likedRestaurantName = await I.grabTextFrom(locate('restaurant-item').find('.text h2'));

  // Make sure liked restaurant same as the first restaurant
  assert.strictEqual(firstRestaurantTarget, likedRestaurantName, 'Liked restaurant name should be the same as the first restaurant name');
});
