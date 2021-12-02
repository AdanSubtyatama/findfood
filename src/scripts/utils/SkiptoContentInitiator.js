/* eslint-disable no-underscore-dangle */
const SkiptoContentInitiator = {
  init({ button, maincontent }) {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      maincontent.focus();
    });
  },

};
export default SkiptoContentInitiator;
