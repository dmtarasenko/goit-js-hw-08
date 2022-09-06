import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInputForm, 500));
formEl.addEventListener('submit', onSubmitForm);

if (localStorage.getItem('feedback-form-state')) {
  formEl.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;

  formEl.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

function onInputForm() {
  const feedbackForm = {
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
}
