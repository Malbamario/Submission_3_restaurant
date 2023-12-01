class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this._message = 'Data is not found';
    this.render();
  }

  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class='data-error-message'>${this._message}</h2>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
