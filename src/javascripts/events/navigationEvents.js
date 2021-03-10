// import 'firebase/auth';
// import firebase from 'firebase/app';
import signOut from '../helpers/auth/signOut';
import { getPins } from '../helpers/data/pinData';
import { showPins, emptyPins } from '../components/pins';
import { getBoards } from '../helpers/data/boardData';
import { emptyBoards, showBoards } from '../components/boards';

// navigation events
const navigationEvents = () => {
  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    // Get ALL Boards on click
    getBoards().then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    // Get Pins on click
    getPins().then((pins) => {
      if (pins.length) {
        showPins(pins);
      } else {
        emptyPins();
      }
    });
  });
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
