class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Made by <a href="https://github.com/Malbamario" target="_blank">Malbamario</a></p>
    `;
  }
}

customElements.define('app-footer', AppFooter);
