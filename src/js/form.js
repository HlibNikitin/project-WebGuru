function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="contacts"]');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('Thank you, our manager will contact you!');
    form.reset();
  });
});
