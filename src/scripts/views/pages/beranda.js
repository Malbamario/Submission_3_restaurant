import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Beranda = {

  async render() {
    const hero = document.createElement('hero-element');
    const restList = document.createElement('restaurant-list');
    const loadingSpinner = document.createElement('loading-spinner');
    restList.label = 'Explore The Restaurants';
    return [hero, restList, loadingSpinner];
  },

  async afterRender() {
    const loadingSpinner = document.querySelector('loading-spinner');
    const restList = document.querySelector('restaurant-list');
    const notFound = document.createElement('error-message');
    const container = document.querySelector('#postExplore');
    const { restaurants, mess } = await RestaurantDbSource.listAllResaturant();

    loadingSpinner.classList.add('hidden');
    notFound.classList.add('hidden');
    if (restaurants.length === 0) {
      restList.append(notFound);
      notFound.message = mess;
      notFound.classList.remove('hidden');
    } else if (restaurants.length > 0) {
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

export default Beranda;
