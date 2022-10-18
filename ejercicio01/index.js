/**
 * @type {HTMLFormElement}
 */
const formForm = document.getElementById('form')
const formFields = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  passwd: document.getElementById('passwd'),
  repeatPasswd: document.getElementById('repeat-passwd'),
  conditions: document.getElementById('conditions'),
  submit: document.getElementById('submitBtn')
}
const regexp = {
  name: /\w+/,
  email: /^(.+\@.+\..+)$/,
  passwd: /^(?=.*\d).{7,}$/
}

formForm.addEventListener('submit', handleSubmit)
formForm.addEventListener('change', handleChange)

/**
 * Handles the submission of the formulary and makes the corresponding validations.
 * @param {SubmitEvent} e 
 */
function handleSubmit(e) {
  e.preventDefault()

  const name = formFields.name.value
  if (!regexp.name.test(name)) {
    return formFields.name.focus()
  }

  const email = formFields.email.value
  if (!regexp.email.test(email)) {
    return formFields.email.focus()
  }

  const passwd = formFields.passwd.value
  if (!regexp.passwd.test(passwd)) {
    return formFields.passwd.focus()
  }

  const repeatPasswd = formFields.repeatPasswd.value
  if (passwd !== repeatPasswd) {
    return formFields.repeatPasswd.focus()
  }

  formForm.submit()
}

function handleChange() {
  const conditions = formFields.conditions.checked
  formFields.submit.disabled = !conditions
}
