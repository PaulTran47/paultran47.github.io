/* Functionality for mobile menu */
let menuOpenIcon = document.querySelector('.icon-menu'),
  menuCloseIcon = document.querySelector('.icon-menu-close'),
  menuList = document.querySelector('.site-menu'),
  menuOverlay = document.querySelector('.site-menu-overlay');
if(menuOverlay) {
  menuOverlay.addEventListener('click', function(e){
    closeMenu();
  });
  menuOverlay.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
if(menuCloseIcon) {
  menuCloseIcon.addEventListener('click', function(e){
    closeMenu();
  });
  menuCloseIcon.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
if(menuList) {
  menuList.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
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
  menuCloseIcon.classList.remove("hidden");
  menuList.classList.remove("hidden");
  menuList.classList.remove("hidden");
  menuOverlay.classList.remove("hidden");
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
/*
  Filtered live search function with ARIA22 accessibility.
  Search is case-insensitive, whitespace-senstive.
*/
let cards = document.querySelectorAll('.callout-box');
function liveSearch() {
  let searchQuery = document.getElementById("searchbox").value;
  let isEmpty
  /*
    Use innerText if all contents are visible
    Use textContent for including hidden elements
    Also counting number of results to display using role="status"
  */
  let counter = 0;
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove("is-hidden");
      counter += 1;
    }
    /* If input field is empty or has only whitespaces, display all results (i.e., no filter applied) */
    else if (searchQuery == "" || searchQuery == null || searchQuery.trim().length == 0) {
      cards[i].classList.remove("is-hidden");
    }
    else {
      cards[i].classList.add("is-hidden");
    }
    if (searchQuery != "" && searchQuery != null && searchQuery.trim().length != 0) {
      document.getElementById("resultsmsg").innerHTML = counter + ' publication(s) found.';
    }
    /* Return default ARIA22 message. */
    else {
      document.getElementById("resultsmsg").innerHTML = 'Publication&#0040;s&#0041; with matched keywords will be displayed in real-time.';
    }
  }
}
/* Adding a little delay for liveSearch() results to appear */
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');
/* Checking searchInput is not null before adding event listener */
if(searchInput) {
  searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
  });
}