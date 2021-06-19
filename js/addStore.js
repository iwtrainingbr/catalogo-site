document.getElementById('form-add-store').addEventListener('submit', (event) => {
  event.preventDefault();

  let newStore = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
  };

  fetch(API_URL+'/store-leads.json', {
    method: 'POST',
    body: JSON.stringify(newStore)
  });

  let modal = new bootstrap.Modal(
    document.getElementById('modal-confirm-store')
  );

  modal.show();

  document.getElementById('form-add-store').reset();
});
