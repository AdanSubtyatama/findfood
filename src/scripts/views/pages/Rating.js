import UrlParser from '../../routes/URLParser';
import RestaurantDBSource from '../../data/RestaurantDBSource';
import '../components/AppListCard';

const Rating = {
  fallbackResults(message) {
    const contentSection = document.querySelector('#allitem');
    contentSection.innerHTML = `<h3 class="text-danger center">${message}</h3>`;
  },

  async render() {
    return `
    <app-listcard class="allitem">
    Loading...
    </app-listcard>
    `;
  },
  async changeTitle(title) {
    const sectionTitle = document.querySelector('.section__title');
    sectionTitle.innerHTML = `Daftar Restaruant dengan Rating : ${title}`;
  },

  async filterRestaurantbyRating(data, url) {
    const listRestaurantContainer = document.querySelector('app-listcard');
    const restaurantTemp = [];
    data.restaurant.forEach((restaurant) => {
      if ((restaurant.rating).toString() === url) {
        restaurantTemp.push(restaurant);
      }
    });
    if (restaurantTemp.length === 0) {
      this.fallbackResults('Maaf, data yang anda minta tidak ada');
    } else {
      listRestaurantContainer.items = restaurantTemp;
    }
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const listRestaurant = await RestaurantDBSource.listRestaurant();
      const restaurants = {
        restaurant: listRestaurant,
      };
      this.changeTitle(url.id);
      this.filterRestaurantbyRating(restaurants, url.id);
    } catch (event) {
      this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');
    }
  },
};
export default Rating;
