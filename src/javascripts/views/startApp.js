import { showBoards, emptyBoards } from '../components/boards';
// import { showPins, emptyPins } from '../components/pins';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import navBar from '../components/naveBar';
import logoutButton from '../components/buttons/loginButton';
import { getBoards } from '../helpers/data/boardData';
// import { getPins } from '../helpers/data/pinData';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
  logoutButton();
  getBoards().then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
  // getPins().then((Array) => {
  //   if (Array.length) {
  //     showPins(Array);
  //   } else {
  //     emptyPins();
  //   }
  // });
};

export default startApp;
