import RestaurantDBSource from '../../data/RestaurantDBSource';
import '../components/AppListCard';

const ListRestaurant = {
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
    sectionTitle.innerHTML = 'Temukan Restoran';
  },

  async afterRender() {
    try {
      const listRestaurant = await RestaurantDBSource.listRestaurant();
      const listRestaurantContainer = document.querySelector('app-listcard');
      this.changeTitle();
      listRestaurantContainer.items = listRestaurant;
    } catch (event) {
      this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');
    }
  },
};
export default ListRestaurant;
