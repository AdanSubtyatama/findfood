import FavoriteRestaurantIDB from '../../data/FavoriteRestaurantIDB';
import '../components/AppListCard';

const Favorite = {

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

  async changeTitle() {
    const sectionTitle = document.querySelector('.section__title');
    sectionTitle.innerHTML = 'Restoran Favorite Anda';
  },

  async afterRender() {
    try {
      const listRestaurant = await FavoriteRestaurantIDB.getAllRestaurants();
      const listRestaurantContainer = document.querySelector('app-listcard');
      this.changeTitle();
      if (listRestaurant.length === 0) {
        this.fallbackResults('Anda belum mempunyai restoran Favorite');
      } else {
        listRestaurantContainer.items = listRestaurant;
      }
    } catch (event) {
      this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');
    }
  },
};

export default Favorite;
