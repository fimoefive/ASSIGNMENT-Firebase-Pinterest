// import 'firebase/auth';
// import firebase from 'firebase/app';
import signOut from '../helpers/auth/signOut';
import { getPins, getBoardPins, searchPins } from '../helpers/data/pinData';
import { showPins, emptyPins } from '../components/pins';
import { getBoards, getSingleBoard } from '../helpers/data/boardData';
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

  // SINGLE BOARD
  document.querySelector('#boards').addEventListener('click', () => {
    getSingleBoard().then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });

  // SINGLE BOARD PINS
  document.querySelector('#board-pins').addEventListener('click', () => {
    getBoardPins().then((pinArray) => {
      if (pinArray.length) {
        showPins(pinArray);
      } else {
        emptyPins();
      }
    });
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (e.keyCode === 13) {
      searchPins(searchValue).then((pinObject) => showPins(pinObject));

      document.querySelector('#search').value = '';
    }
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
