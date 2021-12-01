/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/Config';
import PostReview from '../../utils/PostReview';
import './AppReviewCard';

class AppDetail extends HTMLElement {
  set restaurants(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  async clickEvent() {
    const nameReviewer = this.querySelector('#nameInput').value;
    const textReviewer = this.querySelector('#reviewInput').value;
    const dataReview = {
      id: this._restaurant.id,
      name: nameReviewer,
      review: textReviewer,
    };
    PostReview.onPostReview(dataReview);
  }

  // eslint-disable-next-line class-methods-use-this
  makeTagListMenus(name) {
    const li = document.createElement('li');
    li.setAttribute('tabindex', 0);
    li.innerHTML = name;
    return li;
  }

  async listFoodShow() {
    const listFood = this.querySelector('#listFoods');
    this._restaurant.menus.foods.forEach((menu) => {
      listFood.append(this.makeTagListMenus(menu.name));
    });
  }

  async listDrinkShow() {
    const listDrink = this.querySelector('#listDrinks');
    this._restaurant.menus.drinks.forEach((menu) => {
      listDrink.append(this.makeTagListMenus(menu.name));
    });
  }

  async listCategoriesShow() {
    const listCategori = this.querySelector('#categories');
    this._restaurant.categories.forEach((categori) => {
      listCategori.append(`${categori.name}, `);
    });
  }

  async listReviewsShow() {
    const listReviews = this.querySelector('#reviewList');
    listReviews.innerHTML = '';
    this._restaurant.customerReviews.forEach((review) => {
      const cardItemReview = document.createElement('app-reviewcard');
      cardItemReview.reviews = review;
      listReviews.append(cardItemReview);
    });
  }

  async render() {
    this.innerHTML = `
    <section class="sectiondetail">
      <h2 class="sectiondetail__title" tabindex="0">~ ${this._restaurant.name}</h2>
      <div class="sectiondetail__header">
        <img tabindex="0" src="${CONFIG.BASE_IMAGE_HD_URL + this._restaurant.pictureId}" width="100%" alt="Kafe Kita" crossorigin="anonymous">
      </div>
      <div class="sectiondetail__favorite">
       <button id="likeButton" tabindex="0"> 
          
        </button>
      </div>
      <div class="sectiondetail__rating">
        <a href="/#/rating/${this._restaurant.rating}">
          <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="background: linear-gradient(90deg, #F06400 100%, white 0%);">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <span>
          ${this._restaurant.rating}
          </span>
        </a>
      </div>

      <div class="sectiondetail__content">
        <p tabindex="0" class="sectiondetail__content__description">
        <svg class="svg-inline--fa fa-utensils fa-w-13" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="utensils" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512" data-fa-i2svg=""><path fill="currentColor" d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path></svg> &nbsp;  
          <span id="categories" tabindex="0">  </span>
          <br><br>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg> &nbsp;  
          <span tabindex="0">  ${this._restaurant.address},  ${this._restaurant.city} </span>
          <br><br>

          <b tabindex="0">Deskripsi Restaurant : </b>
          <br>
          <br>
          <span tabindex="0"> ${this._restaurant.description} </span>
        </p>

        <div class="sectiondetail__content__menu">
          <div class="sectiondetail__content__menu__item">
            <h3 tabindex="0">
            Menu Makanan
            </h3>
            <ul id="listFoods">
              
            </ul>
          </div>
          <div class="sectiondetail__content__menu__item">
            <h3 tabindex="0">
            Menu Minuman
            </h3>
            <ul id="listDrinks">
              
            </ul>
          </div>
        </div>
      </div>
      <div class="sectiondetail__content notreserveflex">
        <div class="sectiondetail__content__reviewform">
            <form action="" method="POST" id="formReview">
              <h3 tabindex="0"> Bagaimana tempat ini Menurutmu ? </h3>
                  <label for="nameInput">Nama Anda</label><br>
                  <input id="nameInput" type="text" name="name" title="Masukan Nama" placeholder="Masukan Nama Anda..." required=""><br/>
                  <label for="reviewInput">Review</label><br>
                  <textarea id="reviewInput" name="review" placeholder="Tuliskan ulasan anda..." title="Masukan ulasan" required=""></textarea>
              <button id="sendReview">Kirim Ulasan</button>
          </form>
        </div>
        <div tabindex="0" class="sectiondetail__content__userreview" id="reviewList">
          
        </div>
      </div>
    </section>

          `;
    this.listFoodShow();
    this.listDrinkShow();
    this.listCategoriesShow();
    this.listReviewsShow();

    this.querySelector('#formReview').addEventListener('submit', async (event) => {
      event.preventDefault();
      this.clickEvent();
    });
  }
}
customElements.define('app-detail', AppDetail);
