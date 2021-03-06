import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import homePage from '../components/home';
import startApp from '../views/startApp';
import firebaseConfig from './auth/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      loginButton();
      homePage();
    }
  });
};

export default checkLoginStatus;
