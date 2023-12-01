class LoadingSpinner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class='loader-container'>
          <div class='loader'></div>
        </div>   
      `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
