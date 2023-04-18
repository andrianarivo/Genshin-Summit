const hamburgerMenu = document.querySelector('#hamburger');
const menuContainer = document.querySelector('#menu');

const isOnMobile = () => window.screen.width < 768;

const hideMenu = () => {
  menuContainer.style.display = 'none';
};

const showMenu = () => {
  menuContainer.style.display = 'flex';
};

window.addEventListener('resize', () => {
  if (isOnMobile()) {
    hideMenu();
  } else {
    showMenu();
  }
});

hamburgerMenu.addEventListener('click', () => {
  showMenu();
});

const xmark = document.querySelector('#xmark');

xmark.addEventListener('click', () => {
  hideMenu();
});

const menuItems = document.querySelectorAll('.menu-item');

for (let i = 0; i < menuItems.length; i += 1) {
  const menuItem = menuItems[i];
  menuItem.addEventListener('click', () => {
    menuContainer.style.display = 'none';
  });
}
