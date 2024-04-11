function validateLogin() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-msg");

  // Check the provided username and password
  if (usernameInput === "S" && passwordInput === "2005") {
    errorMessage.textContent = ""; // Clear any previous error message
    document.getElementById('psk-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
}
{
  const scriptURL = 'https://script.google.com/macros/s/AKfycbw7elEk9mmqAL0fxXxPqXv9ItbCcPy5lUfDN2WHUIKByMtiDBr0pEun5XtIlbCbPlVV/exec'

  const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {success.innerHTML="Data Successfully Submitted";
        setTimeout(function(){
          success.innerHTML="";},5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
}
{
  function Logout(){
    location.reload()
  }
}