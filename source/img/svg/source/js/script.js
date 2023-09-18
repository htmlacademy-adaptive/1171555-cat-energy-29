const nav = document.querySelector('.navigation');
const navBtn = document.querySelector('.navigation__toggle');

// if (document.querySelector('.navigation--no-js')) {
//   document.querySelector('.navigation--no-js').classList.remove('navigation--no-js');
// }

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

if (navBtn) {
  navBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  })
}
