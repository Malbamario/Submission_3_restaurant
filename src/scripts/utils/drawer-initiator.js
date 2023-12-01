const DrawerInitiator = {
  init({
    button, drawer, content,
  }) {
    button.addEventListener('click', (event) => {
      if (drawer.classList.contains('close')) {
        this._toggleDrawer(event, drawer);
      } else if (drawer.classList.contains('open')) {
        this._closeDrawer(event, drawer);
      } else {
        this._toggleDrawer(event, drawer);
      }
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.remove('close');
    drawer.classList.toggle('open');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
    drawer.classList.toggle('close');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
