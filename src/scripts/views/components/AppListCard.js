/* eslint-disable no-underscore-dangle */
import './AppCard';

class AppListCard extends HTMLElement {
  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this.innerHTML = `
    `;
    this._items.forEach((restaurant) => {
      const cardItemElement = document.createElement('app-card');
      cardItemElement.restaurants = restaurant;
      this.appendChild(cardItemElement);
    });
  }
}

customElements.define('app-listcard', AppListCard);
