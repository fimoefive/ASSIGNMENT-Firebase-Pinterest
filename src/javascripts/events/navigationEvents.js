// import 'firebase/auth';
// import firebase from 'firebase/app';
import signOut from '../helpers/auth/signOut';
import { getPins } from '../helpers/data/pinData';
import { showPins, emptyPins } from '../components/pins';
import { getBoards } from '../helpers/data/boardData';
import { emptyBoards, showBoards } from '../components/boards';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

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

  document.querySelector('#store').addEventListener('click', () => {
    // console.warn('All Pins');
    getPins().then((pins) => {
      if (pins.length) {
        showPins(pins);
      } else {
        emptyPins();
      }
    });
  });
};

export default navigationEvents;
