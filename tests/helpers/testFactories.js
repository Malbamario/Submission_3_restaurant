import FavButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createFavoriteButtonWithRestaurantData = async (restaurant) => {
  await FavButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

export { createFavoriteButtonWithRestaurantData };
