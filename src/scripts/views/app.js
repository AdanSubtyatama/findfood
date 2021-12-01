/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/DrawerInitator';
import UrlParser from '../routes/URLParser';
import routes from '../routes/Routes';
import SearchAction from '../utils/SearchAction';

class App {
  constructor({
    buttonHamburger, drawer, linkAnchor, content, buttonSearch, inputSearch,
  }) {
    this._buttonHamburger = buttonHamburger;
    this._drawer = drawer;
    this._linkAnchor = linkAnchor;
    this._content = content;
    this._buttonSearch = buttonSearch;
    this._inputSearch = inputSearch;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      buttonHamburger: this._buttonHamburger,
      drawer: this._drawer,
      linkAnchor: this._linkAnchor,
    });

    SearchAction.init({
      buttonSearch: this._buttonSearch,
      inputSearch: this._inputSearch,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
