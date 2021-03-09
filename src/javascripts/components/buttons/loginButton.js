import signIn from '../../helpers/auth/signIn';

// LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="auth-in" class="btn btn-danger">LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#auth-in').addEventListener('click', signIn);
};

export default loginButton;
