const formForm = document.getElementById('form')
const formFields = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  passwd: document.getElementById('passwd'),
  repeatPasswd: document.getElementById('repeat-passwd'),
  conditions: document.getElementById('conditions')
}

formForm.addEventListener('submit', handleSubmit)

/**
 * Handles the submission of the formulary and makes the corresponding validations.
 * @param {SubmitEvent} e 
 */
function handleSubmit(e) {
  e.preventDefault()


}
