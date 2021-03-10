import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;

// GET PINS
export const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// CREATE PIN
export const createPin = (pinObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Boards/${response.data.name}.json`, body)
        .then(() => {
          getPins().then((pins) => resolve(pins));
        });
    }).catch((error) => reject(error));
});

// DELETE PIN
export const deletePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins().then((pins) => resolve(pins)))
    .catch((error) => reject(error));
});
