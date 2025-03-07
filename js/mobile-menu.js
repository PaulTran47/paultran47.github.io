/* Functionality for mobile menu */
let menuOpenIcon = document.querySelector('.icon-menu'),
  menuCloseIcon = document.querySelector('.icon-menu-close'),
  menuList = document.querySelector('.site-menu'),
  menuOverlay = document.querySelector('.site-menu-overlay');
if(menuOverlay) {
  menuOverlay.addEventListener('click', function(e){
    closeMenu();
  });
  menuOverlay.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
if(menuCloseIcon) {
  menuCloseIcon.addEventListener('click', function(e){
    closeMenu();
  });
  menuCloseIcon.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
if(menuList) {
  menuList.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
if(menuOpenIcon) {
  menuOpenIcon.addEventListener('click', function(e){
    openMenu();
  });
  menuOpenIcon.addEventListener('keydown', function(e){
    openMenu();
  });
}
function closeMenu(){
  menuCloseIcon.classList.add('hidden');
  menuList.classList.add('hidden');
  menuOverlay.classList.add('hidden');
}
function openMenu() {
  menuCloseIcon.classList.remove('hidden');
  menuList.classList.remove('hidden');
  menuList.classList.remove('hidden');
  menuOverlay.classList.remove('hidden');
}