let $menuOpenIcon = document.querySelector('.icon-menu'),
  $menuCloseIcon = document.querySelector('.icon-menu-close'),
  $menuList = document.querySelector('.site-menu'),
  $menuOverlay = document.querySelector('.site-menu-overlay');

$menuOverlay.addEventListener('click', function(e){
  closeMenu();
});

$menuCloseIcon.addEventListener('click', function(e){
  closeMenu();
});

$menuOpenIcon.addEventListener('click', function(e){
  openMenu();
});

function closeMenu(){
  $menuCloseIcon.classList.add('hidden');
  $menuList.classList.add('hidden');
  $menuOverlay.classList.add('hidden');
}

function openMenu() {
  $menuCloseIcon.classList.remove("hidden");
  $menuList.classList.remove("hidden");
  $menuList.classList.remove("hidden");
  $menuOverlay.classList.remove("hidden");
}