// login form
const login = document.getElementById("loginform");
const loguser = document.getElementById("logusername");
const logpass = document.getElementById("logpassword");
login.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputslogin();
});


// register form
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();


  if (usernameVal === '') {
    setError(username, 'Username is required')
  }
  else {
    setSuccess(username)
  }

  if (emailVal == '') {
    setError(email, 'Email is required')
  }
  else if (!validateEmail(emailVal)) {
    setError(email, 'Enter the correct Email')
  }
  else {
    setSuccess(email)
  }

  if (passwordVal === '') {
    setError(password, 'password requied')
  }
  else if (passwordVal.length < 8) {
    setError(password, 'Password must be atleast 8 characters')
  }
  else {
    setSuccess(password)
  }

  if (cpasswordVal === '') {
    setError(cpassword, 'confirm pssword requird ')
  }
  else if (cpasswordVal != passwordVal) {
    setError(cpassword, 'Password does not match')
  }
  else {
    setSuccess(cpassword)
  }
}
function validateInputslogin() {
  const loguserval = loguser.value.trim();
  const logpassval = logpass.value.trim();

  // login form
  if (loguserval === '') {
    setError(loguser, 'Username is required');
  }
  else {
    setSuccess(loguser);
  }

  if (logpassval === '') {
    setError(logpass, 'password requied');
  }
  else if (logpassval.length < 8) {
    setError(logpass, 'Password must be atleast 8 characters')
  }
  else {
    setSuccess(logpass);
  }
}
function setError(element, message) {
  const intput = element.parentElement;
  const errorElement = intput.querySelector('.error');
  errorElement.textContent = message;
  // intput.classList.add('error')
  // intput.classList.remove('success')
}

function setSuccess(element) {
  const intput = element.parentElement;
  const errorElement = intput.querySelector('.error');
  errorElement.innerText = '';
  // intput.classList.add('success')
  // intput.classList.remove('error')
}

const validateEmail = (email) => {
  return String(email).toLowerCase().match(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
};


function logi(event) {
  event.preventDefault();
  document.getElementById("logform").style.display = "block";
  document.getElementById("regform").style.display = "none";
}

function register(event) {
  event.preventDefault();
  document.getElementById("regform").style.display = "block";
  document.getElementById("logform").style.display = "none";
}
