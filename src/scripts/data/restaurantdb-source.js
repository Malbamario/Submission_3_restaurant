import API_ENDPOINT from '../globals/api-endpoint';
// import FavoriteRestaurantIdb from './favorite-restaurant-idb';

class RestaurantDbSource {
  static async listAllResaturant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      return await response.json();
    } catch (error) {
      console.error(error);
      return { restaurants: [], mess: 'The network is offline' };
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return await response.json();
    } catch (error) {
      console.error(error);
      return { restaurant: null, mess: 'The network is offline' };
    }
  }

  static async restaurantReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
      return { customerReviews: [], mess: 'The network is offline' };
    }
  }
}

export default RestaurantDbSource;
