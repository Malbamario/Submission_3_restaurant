import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const restList = document.createElement('restaurant-list');
    const loadingSpinner = document.createElement('loading-spinner');
    restList.label = 'Your Favorite Restaurants';
    return [restList, loadingSpinner];
  },

  async afterRender() {
    const restList = document.querySelector('restaurant-list');
    const loadingSpinner = document.querySelector('loading-spinner');
    const container = document.querySelector('#postExplore');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    loadingSpinner.classList.add('hidden');
    if (restaurants.length === 0) {
      restList.label = 'No Favorite Restaurants';
    } else {
      restaurants.forEach((restaurant) => {
        const list = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = `/#/detail/${restaurant.id}`;
        const restaurantItem = createRestaurantItemTemplate(restaurant);
        anchor.appendChild(restaurantItem);
        list.appendChild(anchor);
        container.appendChild(list);
      });
    }
  },
};

export default Favorite;
