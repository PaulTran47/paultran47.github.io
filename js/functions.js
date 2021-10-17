/* Functionality for mobile menu */
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

/* InntersectionObserver API */
const imgObserver = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      lazyLoad(entry.target);
      self.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.lazy-img').forEach(img => {
  imgObserver.observe(img);
});

/* Function that lazy loads */
function lazyLoad(img) {
  const picture = img.parentElement;
  const source = picture.querySelector('.lazy-source');

  source.srcset = source.getAttribute('data-srcset');
  img.src = img.getAttribute('data-src');
}