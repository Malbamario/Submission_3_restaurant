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
    this.tabIndex = 2;
    this.ariaLabel = `${this._data.name}, ${this._data.city}, with rating ${this._data.rating} per 5.`;
    this.innerHTML = `
            <p class="kota">${this._data.city}</p>
            <img src="${this._thumbnail}" alt="${this._data.name}">
            <div class="text">
                <div class="star-outer"><div class="star-inner"></div></div>
                <h2>${this._data.name}</h2>
            </div>
        `;
    this.querySelector('.star-inner').style.width = `${(this._data.rating / 5) * 100}%`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
