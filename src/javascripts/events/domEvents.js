import boardInfo from '../components/boardInfo';
import { showBoards } from '../components/boards';
import { showPins } from '../components/pins';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';
import { createBoard, deleteBoard } from '../helpers/data/boardData';
import { createPin, deletePin } from '../helpers/data/pinData';
import { pinBoardInfo, deleteBoardPins } from '../helpers/data/boardPinData';
// import formModal from '../components/forms/formModal';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // // CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      const boardId = e.target.id.split('--')[1];
      deleteBoard(boardId).then((boardsArray) => showBoards(boardsArray));
    }

    // ADD CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('deletePin')) {
      const pinId = e.target.id.split('--')[1];
      deletePin(pinId).then((pinsArray) => showPins(pinsArray));
    }

    // CLICK EVENT FOR SHOWING THE PINS OF A BOARD
    if (e.target.id.includes('show-pins')) {
      const boardId = e.target.id.split('--')[1];
      pinBoardInfo(boardId).then((boardObj) => {
        createPin(boardObj.boardPins);
        boardInfo(boardObj.board);
      });
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
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

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PIN
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      // console.warn(firebase.auth().currentUser.uid);
      e.preventDefault();
      const pinObject = {
        image: document.querySelector('#image').value,
        title: document.querySelector('#title').value,
        content: document.querySelector('#content').value,
      };
      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }

    if (e.target.id.includes('delete-board')) {
      // if (window.confirm('Want to delete?')) {
      const firebaseKey = e.target.id.split('--')[1];
      // console.warn(firebaseKey);
      deleteBoardPins(firebaseKey).then((pinsArray) => showBoards(pinsArray));
      // }
    }

    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      pinBoardInfo(boardId).then((boardInfoObject) => {
        showBoards(boardInfoObject.boards);
        boardInfo(boardInfoObject.author);
      });
    }
  });
};

export default domEvents;
