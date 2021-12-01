/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ buttonHamburger, drawer, linkAnchor }) {
    buttonHamburger.addEventListener('click', async (event) => {
      await this._toggleDrawer(event, drawer);
      await this._hideTabindexDrawer(event, linkAnchor);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  },

  _hideTabindexDrawer(event, linkAnchor) {
    event.stopPropagation();
    for (let index = 0, { length } = linkAnchor; index < length; index += 1) {
      if (linkAnchor[index].hasAttribute('tabindex')) {
        linkAnchor[index].removeAttribute('tabindex');
      } else {
        linkAnchor[index].setAttribute('tabindex', -1);
      }
    }
  },

};
export default DrawerInitiator;
