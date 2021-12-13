(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_AppListCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ListRestaurant = {
  fallbackResults: function fallbackResults(message) {
    var contentSection = document.querySelector('#allitem');
    contentSection.innerHTML = "<h3 class=\"text-danger center\">".concat(message, "</h3>");
  },
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <app-listcard class=\"allitem\">\n    Loading...\n    </app-listcard>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  changeTitle: function changeTitle() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var sectionTitle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sectionTitle = document.querySelector('.section__title');
              sectionTitle.innerHTML = 'Temukan Restoran';

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  afterRender: function afterRender() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var listRestaurant, listRestaurantContainer;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listRestaurant();

            case 3:
              listRestaurant = _context3.sent;
              listRestaurantContainer = document.querySelector('app-listcard');

              _this.changeTitle();

              listRestaurantContainer.items = listRestaurant;
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);

              _this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ListRestaurant);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _components_AppDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _utils_LikeButtonInitiator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _utils_SkiptoContentInitiator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _data_FavoriteRestaurantIDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var Detail = {
  fallbackResults: function fallbackResults(message) {
    this.innerHTML = "\n        <h2 class=\"text-danger text-center\">".concat(message, "</h2>");
  },
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <app-detail>Loading...</app-detail>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  changeTitle: function changeTitle() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var sectionTitle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sectionTitle = document.querySelector('.section__title');
              sectionTitle.innerHTML = 'Temukan Restoran';

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  afterRender: function afterRender() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var url, dataDetailRestaurant, detailRestaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              url = _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseActiveUrlWithoutCombiner();
              _context3.next = 4;
              return _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].detailRestaurant(url.id);

            case 4:
              dataDetailRestaurant = _context3.sent;
              detailRestaurant = document.querySelector('app-detail');

              _this.changeTitle();

              detailRestaurant.restaurants = dataDetailRestaurant.restaurant;
              detailRestaurant.render();
              _utils_LikeButtonInitiator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].init({
                likeButton: document.querySelector('#likeButton'),
                favoriteRestaurants: _data_FavoriteRestaurantIDB__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
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
                  customerReviews: dataDetailRestaurant.restaurant.customerReviews
                }
              });
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);

              _this.fallbackResults('Error');

            case 15:
              _utils_SkiptoContentInitiator__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].init({
                button: document.querySelector('.goto__content'),
                maincontent: document.querySelector('#maincontent')
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Detail);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _components_AppListCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Search = {
  fallbackResults: function fallbackResults(message) {
    var contentSection = document.querySelector('#allitem');
    contentSection.innerHTML = "<h3 class=\"text-danger center\">".concat(message, "</h3>");
  },
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <app-listcard class=\"allitem\">\n    Loading...\n    </app-listcard>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  changeTitle: function changeTitle(title) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var sectionTitle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sectionTitle = document.querySelector('.section__title');
              sectionTitle.innerHTML = "Hasil Pencarian : ".concat(title);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  afterRender: function afterRender() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var url, listRestaurant, listRestaurantContainer;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              url = _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseActiveUrlWithoutCombiner();
              _context3.next = 4;
              return _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].searchRestaurant(url.id);

            case 4:
              listRestaurant = _context3.sent;

              _this.changeTitle(url.id);

              listRestaurantContainer = document.querySelector('app-listcard');

              if (listRestaurant.founded === 0) {
                _this.fallbackResults('Maaf, data yang anda minta tidak ada');
              } else {
                listRestaurantContainer.items = listRestaurant.restaurants;
              }

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);

              _this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _components_AppListCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var City = {
  fallbackResults: function fallbackResults(message) {
    var contentSection = document.querySelector('#allitem');
    contentSection.innerHTML = "<h3 class=\"text-danger center\">".concat(message, "</h3>");
  },
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <app-listcard class=\"allitem\">\n    Loading...\n    </app-listcard>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  changeTitle: function changeTitle(title) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var sectionTitle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sectionTitle = document.querySelector('.section__title');
              sectionTitle.innerHTML = "Daftar Restaruant di Kota : ".concat(title);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  filterRestaurantbyCity: function filterRestaurantbyCity(data, url) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var listRestaurantContainer, restaurantTemp;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              listRestaurantContainer = document.querySelector('app-listcard');
              restaurantTemp = [];
              data.restaurant.forEach(function (restaurant) {
                if (restaurant.city.toLowerCase() === url.toLowerCase()) {
                  restaurantTemp.push(restaurant);
                }
              });

              if (restaurantTemp.length === 0) {
                _this.fallbackResults('Maaf, data yang anda minta tidak ada');
              } else {
                listRestaurantContainer.items = restaurantTemp;
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  afterRender: function afterRender() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var url, listRestaurant, restaurants;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              url = _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseActiveUrlWithoutCombiner();
              _context4.next = 4;
              return _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].listRestaurant();

            case 4:
              listRestaurant = _context4.sent;
              restaurants = {
                restaurant: listRestaurant
              };

              _this2.changeTitle(url.id);

              _this2.filterRestaurantbyCity(restaurants, url.id);

              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);

              _this2.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (City);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _components_AppListCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Rating = {
  fallbackResults: function fallbackResults(message) {
    var contentSection = document.querySelector('#allitem');
    contentSection.innerHTML = "<h3 class=\"text-danger center\">".concat(message, "</h3>");
  },
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <app-listcard class=\"allitem\">\n    Loading...\n    </app-listcard>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  changeTitle: function changeTitle(title) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var sectionTitle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sectionTitle = document.querySelector('.section__title');
              sectionTitle.innerHTML = "Daftar Restaruant dengan Rating : ".concat(title);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  filterRestaurantbyRating: function filterRestaurantbyRating(data, url) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var listRestaurantContainer, restaurantTemp;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              listRestaurantContainer = document.querySelector('app-listcard');
              restaurantTemp = [];
              data.restaurant.forEach(function (restaurant) {
                if (restaurant.rating.toString() === url) {
                  restaurantTemp.push(restaurant);
                }
              });

              if (restaurantTemp.length === 0) {
                _this.fallbackResults('Maaf, data yang anda minta tidak ada');
              } else {
                listRestaurantContainer.items = restaurantTemp;
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  afterRender: function afterRender() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var url, listRestaurant, restaurants;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              url = _routes_URLParser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].parseActiveUrlWithoutCombiner();
              _context4.next = 4;
              return _data_RestaurantDBSource__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].listRestaurant();

            case 4:
              listRestaurant = _context4.sent;
              restaurants = {
                restaurant: listRestaurant
              };

              _this2.changeTitle(url.id);

              _this2.filterRestaurantbyRating(restaurants, url.id);

              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);

              _this2.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _data_FavoriteRestaurantIDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _components_AppListCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_SkiptoContentInitiator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Favorite = {
  fallbackResults: function fallbackResults(message) {
    var contentSection = document.querySelector('#allitem');
    contentSection.innerHTML = "<h3 class=\"text-danger center\">".concat(message, "</h3>");
  },
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n        <app-listcard class=\"allitem\">\n        Loading...\n        </app-listcard>\n        ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  changeTitle: function changeTitle() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var sectionTitle;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sectionTitle = document.querySelector('.section__title');
              sectionTitle.innerHTML = 'Restoran Favorite Anda';

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  afterRender: function afterRender() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var listRestaurant, listRestaurantContainer;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _data_FavoriteRestaurantIDB__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getAllRestaurants();

            case 3:
              listRestaurant = _context3.sent;
              listRestaurantContainer = document.querySelector('app-listcard');

              _this.changeTitle();

              if (listRestaurant.length === 0) {
                _this.fallbackResults('Anda belum mempunyai restoran Favorite');
              } else {
                listRestaurantContainer.items = listRestaurant;
              }

              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);

              _this.fallbackResults('Maaf, terjadi kesalahan dalam menampilkan data');

            case 12:
              _utils_SkiptoContentInitiator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].init({
                button: document.querySelector('.goto__content'),
                maincontent: document.querySelector('#maincontent')
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Favorite);

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })
]]);