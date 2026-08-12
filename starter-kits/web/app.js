const form = document.querySelector('#demo-form');
const result = document.querySelector('#result');

form.addEventListener('submit', event => {
  event.preventDefault();
  const message = new FormData(form).get('message').trim().replace(/\s+/g, ' ');
  result.textContent = message ? `Preview: ${message}` : 'Enter a message first.';
});
