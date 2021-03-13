const homePage = () => {
  document.querySelector('#login-form-container').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" id="pinterest" href="#">Pinterest</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div id="login-button"></div>
    </div>
  </nav>`;
  document.querySelector('#app').innerHTML = '<h1>PINTEREST</h1><h3>Login to Start!</h3>';
};

export default homePage();
