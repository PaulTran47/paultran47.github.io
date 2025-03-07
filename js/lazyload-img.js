/* IntersectionObserver API */
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