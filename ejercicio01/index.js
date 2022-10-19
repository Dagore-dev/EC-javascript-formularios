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
  errors: document.getElementById('error'),
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
function handleSubmit (e) {
  e.preventDefault()
  removePreviousErrors()
  const validations = []

  const name = formFields.name.value
  validations.push({ isValid: regexp.name.test(name), msg: 'El nombre no puede estar vacío' })

  const email = formFields.email.value
  validations.push({ isValid: regexp.email.test(email), msg: 'La dirección de correo debe ser válida' })

  const passwd = formFields.passwd.value
  validations.push({ isValid: regexp.passwd.test(passwd), msg: 'La contraseña debe tener al menos un dígito y 8 caracteres' })

  const repeatPasswd = formFields.repeatPasswd.value
  validations.push({ isValid: passwd === repeatPasswd, msg: 'Las contraseñas deben coincidir' })

  for (const validation of validations) {
    if (!validation.isValid) {
      const p = document.createElement('p')
      p.textContent = validation.msg
      formFields.errors.appendChild(p)
    }
  }

  const allFieldsAreValid = validations.every(({ isValid }) => isValid === true)

  if (allFieldsAreValid) {
    console.log('submit')
    formForm.submit()
  }
}

function handleChange () {
  const conditions = formFields.conditions.checked
  formFields.submit.disabled = !conditions
}

function removePreviousErrors () {
  while (formFields.errors.firstElementChild) {
    formFields.errors.removeChild(formFields.errors.firstElementChild)
  }
}
