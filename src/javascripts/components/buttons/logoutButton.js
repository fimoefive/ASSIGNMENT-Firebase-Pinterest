import 'firebase/auth';
import signOut from '../../helpers/auth/signOut';
// LOGOUT BUTTON
const logoutButton = () => {
  const domString = '<button id="auth-out" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#auth-out').addEventListener('click', signOut);
};

export default logoutButton;
