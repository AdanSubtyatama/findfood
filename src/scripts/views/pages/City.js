import UrlParser from '../../routes/URLParser';
import RestaurantDBSource from '../../data/RestaurantDBSource';
import '../components/AppListCard';

const City = {
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
    sectionTitle.innerHTML = `Daftar Restaruant di Kota : ${title}`;
  },

  async filterRestaurantbyCity(data, url) {
    const listRestaurantContainer = document.querySelector('app-listcard');
    const restaurantTemp = [];
    data.restaurant.forEach((restaurant) => {
      if (restaurant.city.toLowerCase() === url.toLowerCase()) {
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
      this.filterRestaurantbyCity(restaurants, url.id);
    } catch (event) {
      this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');
    }
  },
};
export default City;
