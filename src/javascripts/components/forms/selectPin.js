import firebase from 'firebase/app';
import 'firebase/auth';
import { getPins } from '../../helpers/data/pinData';

const selectPin = (boardObject = {}) => {
  let domString = `<label for="author">Select Pin</label>
    <select class="form-control" id="pin" required>
    <option value="">Select a Pin</option>`;

  getPins(firebase.auth().currentUser.uid).then((authorsArray) => {
    authorsArray.forEach((pin) => {
      if (pin.firebaseKey === boardObject.author_id) {
        domString += `<option selected value="${pin.firebaseKey}">${pin.title}`;
      } else {
        domString += `<option value="${pin.firebaseKey}">${pin.title} `;
      }
    });

    domString += '</select>';

    document.querySelector('#select-pin').innerHTML = domString;
  });
};

export default selectPin;
