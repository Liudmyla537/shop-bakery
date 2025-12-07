document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.backdrop');
  const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
  const modalBtnClose = document.querySelector('.modal-btn-close');
  const body = document.body;
  const html = document.documentElement;

  if (!modal) {
    console.error('Modal (.backdrop) not found');
    return;
  }

  if (!modalBtnClose) {
    console.error('Modal close button not found');
  }

  let scrollPosition = 0;

  const openModal = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log('Opening modal');

    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    modal.classList.remove('is-hidden');
    body.classList.add('no-scroll', 'modal-open');
    html.classList.add('no-scroll', 'modal-open');
    body.style.top = `-${scrollPosition}px`;
    html.style.top = `-${scrollPosition}px`;
  };

  const closeModal = () => {
    modal.classList.add('is-hidden');
    body.classList.remove('no-scroll', 'modal-open');
    html.classList.remove('no-scroll', 'modal-open');
    body.style.top = '';
    html.style.top = '';

    window.scrollTo(0, scrollPosition);
  };

  if (modalBtnOpen && modalBtnOpen.length > 0) {
    console.log(
      `Found ${modalBtnOpen.length} button(s) with class .modal-btn-open`,
    );
    modalBtnOpen.forEach((btn, index) => {
      console.log(`Adding event listener to button ${index + 1}`);
      btn.addEventListener('click', openModal);
    });
  } else {
    console.warn('No buttons with class .modal-btn-open found');
  }

  if (modalBtnClose) {
    modalBtnClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
