const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const body = document.body;
const html = document.documentElement;

let scrollPosition = 0;

const openMenu = () => {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  mobileMenu.classList.add('is-open');
  body.classList.add('no-scroll', 'menu-open');
  html.classList.add('no-scroll', 'menu-open');
  body.style.top = `-${scrollPosition}px`;
  html.style.top = `-${scrollPosition}px`;
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  body.classList.remove('no-scroll', 'menu-open');
  html.classList.remove('no-scroll', 'menu-open');
  body.style.top = '';
  html.style.top = '';

  window.scrollTo(0, scrollPosition);
};

menuBtnOpen.addEventListener('click', openMenu);
menuBtnClose.addEventListener('click', closeMenu);

const mobileMenuLinks = document.querySelectorAll('.header-menu-burger-link');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
