const nav = document.querySelector('.navigation');
const navBtn = document.querySelector('.navigation__toggle');

// if (navBtn) {
//   navBtn.addEventListener('click', () => {
//     nav.classList.toggle('is-open');
//   })
// }


navBtn.addEventListener('click', () => {
  if (nav.classList.contains('is-closed')) {
    nav.classList.remove('is-closed');
    nav.classList.add('is-open');
  } else {
    nav.classList.add('is-closed');
    nav.classList.remove('is-open');
  }
})
