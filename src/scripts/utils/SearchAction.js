/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const SearchAction = {
  async init({ buttonSearch, inputSearch }) {
    buttonSearch.addEventListener('click', async (event) => {
      await this._changeURL(event, inputSearch.value);
    });
  },

  _changeURL(event, inputSearch) {
    event.preventDefault();
    window.location.href = `/#/search/${inputSearch}`;
  },

};
export default SearchAction;
