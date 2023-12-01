import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/responsive.sass';
import './components/app-bar';
import './components/hero';
import './components/restaurant-list';
import './components/restaurant-item';
import './components/loading-spinner';
import './components/error-message';
import './components/app-footer';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav__list, .close'),
  content: document.querySelector('#main-content'),
});

const refresh = () => {
  const skip = document.querySelector('#skip-to-content');
  if (window.location.hash === '') skip.href = '#';
  else skip.href = window.location.hash;
  app.renderPage();
};

window.addEventListener('hashchange', refresh);

window.addEventListener('load', () => {
  refresh();
  swRegister();
});
