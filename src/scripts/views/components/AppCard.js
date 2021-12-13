/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/Config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class AppCard extends HTMLElement {
  set restaurants(restaurant) {
    this._restaurants = restaurant;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
      <h2 class="text-danger text-center">${message}</h2>`;
  }

  render() {
    this.innerHTML = `
      <article class="card" tabindex="0">
                <div class="card__image">
                    <img tabindex="0" class="card__image__thumbnail lazyload" width="100%" height="225" data-src="${CONFIG.BASE_IMAGE_URL + this._restaurants.pictureId}" alt="gambar resto ${this._restaurants.name}t" crossorigin="anonymous">
                </div>
                <div class="card__content">
                    <div class="card__content__title__rating">
                        <a href="#/detail/${this._restaurants.id}" class="card__content__title link"> <h3>${this._restaurants.name}</h3></a>
                        <span class="card__content__rating"><a href="/#/rating/${this._restaurants.rating}" class="card__content__rating__value" aria-label="Rating 4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="card__content__rating__value_star h-2 w-2 " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            <span class="card__content__rating__value_number" > ${this._restaurants.rating} </span>
                        </a></span>
                    </div>                    
                    <p class="card__content__description" tabindex="0">${this._restaurants.description}</p>
                    <a href="#/city/${this._restaurants.city}" class="card__content__city link" tabindex="0"     >${this._restaurants.city}</a>
                </div>
            </article>
            
          `;
  }
}
customElements.define('app-card', AppCard);
