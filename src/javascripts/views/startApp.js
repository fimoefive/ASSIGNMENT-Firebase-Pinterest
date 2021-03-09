import { showBoards, emptyBoards } from '../components/boards';
import { showPins, emptyPins } from '../components/pins';
import logoutButton from '../components/buttons/loginButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/naveBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getPins } from '../helpers/data/pinData';
import { getBoards } from '../helpers/data/boardData';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getBoards().then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
  getPins().then((Array) => {
    if (Array.length) {
      showPins(Array);
    } else {
      emptyPins();
    }
  });
};

export default startApp;
