import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  firebase.auth().signOut();
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#display').innerHTML = '';
};

export default signOut;
