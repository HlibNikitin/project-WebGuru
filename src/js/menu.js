(() => {
  const mob_menu = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu-window]'),
    menu: document.querySelector('.mobil-menu'),
    item: document.querySelectorAll('.mb-nav-item'),
    body: document.body,
  };

  mob_menu.openModalBtn?.addEventListener('click', openModal);
  mob_menu.closeModalBtn?.addEventListener('click', closeModal);

  mob_menu.item.forEach(el => {
    el.addEventListener('click', closeModal);
  });

  mob_menu.modal.addEventListener('click', e => {
    if (!mob_menu.menu.contains(e.target)) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mob_menu.modal.classList.contains('is-open')) {
      closeModal();
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }
  });

  function openModal() {
    mob_menu.modal.classList.add('is-open');
    mob_menu.body.classList.add('no-scroll');
  }

  function closeModal() {
    mob_menu.modal.classList.remove('is-open');
    mob_menu.body.classList.remove('no-scroll');
  }
})();
