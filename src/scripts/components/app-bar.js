class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#" id="skip-to-content" tabindex="0">Skip To Content</a>
        <nav>
            <div class="title">
                <picture>
                  <source type="image/webp" srcset="./app-icon.webp">
                  <source type="image/png" srcset="./app-icon.png">
                  <img class="lazyload" src="./app-icon.png" alt="Malba Culinary Icon">
                </picture>
                <h1>Malba Culinary</h1>
            </div>
            <button id="hamburger" tabindex="0" aria-label="Menu">☰</button>
            <ul class="nav__list close">
                <li><a href="#" tabindex="0">Home</a></li>
                <li><a href="#/favorite" tabindex="0">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/malba-mario/" target="_blank" tabindex="0">About</a></li>
            </ul>
        </nav>`;
    const skip = this.querySelector('#skip-to-content');
    skip.addEventListener('click', (e) => {
      e.preventDefault();
      let focus = document.querySelector('#main-content');
      if (window.location.hash === '' || window.location.hash === '#' || window.location.hash === '#/beranda' || window.location.hash === '#restaurant') {
        focus = document.querySelector('#restaurant');
      }
      focus.scrollIntoView({ behavior: 'smooth' });
      skip.blur();
    });
  }
}

customElements.define('app-bar', AppBar);
