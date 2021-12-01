import API_ENDPOINT from '../globals/APIEndpoint';

class RestaurantDBSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LISTRESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch {
      return false;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch {
      return false;
    }
  }

  static async searchRestaurant(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      return response.json();
    } catch {
      return false;
    }
  }

  static async postReviewRestaurant(review) {
    try {
      const response = await fetch(API_ENDPOINT.SENDREVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      return response.json();
    } catch {
      return false;
    }
  }
}

export default RestaurantDBSource;
