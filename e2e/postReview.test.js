/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Post a Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post Review', async ({ I }) => {
  I.waitForElement(locate('restaurant-list').find('li a restaurant-item'));
  I.seeElement(locate('restaurant-list').find('li a restaurant-item'));

  const firstRestaurant = locate('restaurant-list li').first();
  I.click(locate(firstRestaurant).find('a'));
  I.seeElement(locate('#customerReview-box').find('form'));

  const testName = `I am malba ${new Date().toLocaleTimeString()}`;
  const testMessage = `This is my message '${new Date().toLocaleTimeString()}'`;
  const sumReviewerBefore = await I.grabNumberOfVisibleElements('.item-list-review');

  I.fillField('reviewer', testName);
  I.fillField('reviewIn', testMessage);
  I.click('Submit');
  I.wait(1);

  I.see(testName);
  I.see(testMessage);

  const currentSumReviewer = await I.grabNumberOfVisibleElements('.item-list-review');

  // Make sure, the new review is posted
  assert(currentSumReviewer === sumReviewerBefore + 1);
});

Scenario('Post Review Without Fill the Form', async ({ I }) => {
  I.wait(0.5);
  I.seeElement('restaurant-item');

  I.waitForElement(locate('restaurant-list').find('li a restaurant-item'));
  I.seeElement(locate('restaurant-list').find('li a restaurant-item'));

  const firstRestaurant = locate('restaurant-list li').first();
  I.click(locate(firstRestaurant).find('a'));

  I.seeElement(locate('#customerReview-box').find('form'));
  const sumReviewerBefore = await I.grabNumberOfVisibleElements('.item-list-review');

  I.click('Submit');

  const currentSumReviewer = await I.grabNumberOfVisibleElements('.item-list-review');
  // Make sure, the post without fill the form is not posted
  assert(currentSumReviewer === sumReviewerBefore);
});
