import UrlParser from '../../routes/URLParser';
import RestaurantDBSource from '../../data/RestaurantDBSource';
import '../components/AppDetail';
import LikeButtonInitiator from '../../utils/LikeButtonInitiator';

const Detail = {
  fallbackResults(message) {
    this.innerHTML = `
        <h2 class="text-danger text-center">${message}</h2>`;
  },

  async render() {
    return `
      <app-detail>Loading...</app-detail>
    `;
  },
  async changeTitle() {
    const sectionTitle = document.querySelector('.section__title');
    sectionTitle.innerHTML = 'Temukan Restoran';
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const dataDetailRestaurant = await RestaurantDBSource.detailRestaurant(url.id);
      const detailRestaurant = document.querySelector('app-detail');
      this.changeTitle();
      detailRestaurant.restaurants = dataDetailRestaurant.restaurant;
      detailRestaurant.render();
      LikeButtonInitiator.init({
        likeButton: document.querySelector('#likeButton'),
        restaurant: {
          id: dataDetailRestaurant.restaurant.id,
          name: dataDetailRestaurant.restaurant.name,
          description: dataDetailRestaurant.restaurant.description,
          city: dataDetailRestaurant.restaurant.city,
          address: dataDetailRestaurant.restaurant.address,
          pictureId: dataDetailRestaurant.restaurant.pictureId,
          categories: dataDetailRestaurant.restaurant.categories,
          menus: dataDetailRestaurant.restaurant.menus,
          drinks: dataDetailRestaurant.restaurant.drinks,
          rating: dataDetailRestaurant.restaurant.rating,
          customerReviews: dataDetailRestaurant.restaurant.customerReviews,
        },
      });
    } catch {
      this.fallbackResults('Error');
    }
  },
};
export default Detail;
