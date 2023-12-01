import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as testFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('should show a save button when the restaurant has not been liked before', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should show a remove save button when the restaurant has not been liked before', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    document.getElementById('likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({ id: 1 });
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not save restaurant when it has no id', async () => {
    await testFactories.createFavoriteButtonWithRestaurantData({});
    document.getElementById('likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
