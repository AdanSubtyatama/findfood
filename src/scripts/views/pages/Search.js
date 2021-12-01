import UrlParser from '../../routes/URLParser';
import RestaurantDBSource from '../../data/RestaurantDBSource';
import '../components/AppListCard';

const Search = {
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
    sectionTitle.innerHTML = `Hasil Pencarian : ${title}`;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const listRestaurant = await RestaurantDBSource.searchRestaurant(url.id);
      this.changeTitle(url.id);
      const listRestaurantContainer = document.querySelector('app-listcard');
      if (listRestaurant.founded === 0) {
        this.fallbackResults('Maaf, data yang anda minta tidak ada');
      } else {
        listRestaurantContainer.items = listRestaurant.restaurants;
      }
    } catch {
      this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');
    }
  },
};
export default Search;
