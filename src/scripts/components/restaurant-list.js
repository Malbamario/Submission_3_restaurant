class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set label(label) {
    this._label = label;
    this.render();
  }

  render() {
    this.id = 'restaurant';
    this.innerHTML = `
        <h1>${this._label}</h1>
        <ul id="postExplore" ></ul>
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);
