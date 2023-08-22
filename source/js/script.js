const nav = document.querySelector('.navigation');
const navBtn = document.querySelector('.navigation__toggle');

if (navBtn) {
  navBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  })
}
