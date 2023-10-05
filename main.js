const scriptURL = 'https://script.google.com/macros/s/AKfycbweSMuf8-0uHmjUYrPpC_ivPCODtSlBnxB6baQM2go88e-Yr6MP4zoCPf_wFVqmp5d4vA/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})