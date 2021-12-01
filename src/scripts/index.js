import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/components/AppBar';
import './views/components/AppFooter';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  buttonHamburger: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  linkAnchor: document.getElementsByClassName('linkmenus'),
  content: document.querySelector('#allitem'),
  buttonSearch: document.querySelector('#buttonSearch'),
  inputSearch: document.querySelector('#search'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
