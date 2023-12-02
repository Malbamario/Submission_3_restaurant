class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._data = data;
  }

  set thumbnail(thumbnail) {
    this._thumbnail = thumbnail;
    this.render();
  }

  render() {
    this.ariaLabel = `${this._data.name}, ${this._data.city}, with rating ${this._data.rating} per 5.`;
    this.innerHTML = `
            <p class="kota">${this._data.city}</p>
            <picture>
                <source media="(max-width: 567px)" data-srcset="${this._thumbnail.small}">
                <source media="(min-width: 568px)" data-srcset="${this._thumbnail.medium}">
                <img class="lazyload" data-src="${this._thumbnail.small}" alt="${this._data.name}">
            </picture>
            <div class="text">
                <div class="star-outer"><div class="star-inner"></div></div>
                <h2>${this._data.name}</h2>
            </div>
        `;
    this.querySelector('.star-inner').style.width = `${(this._data.rating / 5) * 100}%`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
