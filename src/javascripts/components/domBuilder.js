const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
  <h2 id="welcomeHeader">Welcome to Pinterest!</h2>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="display">
      <div id="header"></div>
      <div id="display-area" class="d-flex flex-row flex-wrap align-items-center"></div>
    </div>
  </div>`;
};

export default domBuilder;
