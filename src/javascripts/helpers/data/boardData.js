import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR BOOKS
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
export const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Boards.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// CREATE BOARD
export const createBoard = (boardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Boards.json`, boardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards().then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

// DELETE BOARD
export const deleteBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Boards/${firebaseKey}.json`)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});
