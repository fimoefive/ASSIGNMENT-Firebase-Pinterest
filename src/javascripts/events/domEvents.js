import { showBoards } from '../components/boards';
// import boardInfo from '../components/boardInfo';
import { createBoard, deleteBoard } from '../helpers/data/boardData';
import { showPins } from '../components/pins';
import { createPin, deletePin } from '../helpers/data/pinData';
// import formModal from '../components/forms/formModal';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      const boardId = e.target.id.split('--')[1];
      deleteBoard(boardId).then((boardsArray) => showBoards(boardsArray));
    }

    // ADD CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin')) {
      // console.warn('CLICKED DELETE PIN', e.target.id);
      const pinId = e.target.id.split('--')[1];
      deletePin(pinId).then((pins) => pins(pins));
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-board')) {
      // const userId = firebase.auth().currentUser.uid;
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
      };
      createBoard(boardObject).then((boardsArray) => showBoards(boardsArray));
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      // console.warn(firebase.auth().currentUser.uid);
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
      };
      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
