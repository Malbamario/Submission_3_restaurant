import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import DetailHelper from '../../utils/detail-helper';
import FavButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    const likeButt = document.createElement('div');
    const container = document.createElement('div');
    const loadingSpinner = document.createElement('loading-spinner');
    likeButt.id = 'likeButtonContainer';
    container.id = 'container-detail';
    container.className = 'container-detail wrapper';
    container.append(loadingSpinner);
    return [container, likeButt];
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingSpinner = document.querySelector('loading-spinner');
    const notFound = document.createElement('error-message');
    const restaurantDetailElement = document.querySelector('#container-detail');

    const { restaurant, mess: messRes } = await RestaurantDbSource.detailRestaurant(url.id);
    loadingSpinner.classList.add('hidden');
    notFound.classList.add('hidden');
    if (!restaurant) {
      restaurantDetailElement.append(notFound);
      notFound.message = messRes;
      notFound.classList.remove('hidden');
    } else {
      restaurantDetailElement.innerHTML = createRestaurantDetailTemplate(restaurant);

      const reviewForm = document.querySelector('#review-form');
      reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.querySelector('#reviewer');
        const review = document.querySelector('#review-text');
        const list = document.querySelector('#list-review');
        const data = { id: url.id, name: name.value, review: review.value };
        const { customerReviews } = await RestaurantDbSource.restaurantReview(data);
        list.innerHTML = DetailHelper.eachCustomersReview(customerReviews);
        review.value = '';
        name.value = '';
      });

      FavButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          name: restaurant.name,
          description: restaurant.description,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });
    }
  },
};

export default Detail;
