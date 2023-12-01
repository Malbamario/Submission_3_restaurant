class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#" id="skip-to-content" tabindex="1">Skip To Content</a>
        <nav>
            <div class="title">
                <img class="lazyload" src="./app-icon.png" alt="Malba Culinary Icon">
                <h1>Malba Culinary</h1>
            </div>
            <button id="hamburger" tabindex="1" aria-label="Menu">☰</button>
            <ul class="nav__list close">
                <li><a href="#" tabindex="1">Home</a></li>
                <li><a href="#/favorite" tabindex="1">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/malba-mario/" target="_blank" tabindex="1">About</a></li>
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
