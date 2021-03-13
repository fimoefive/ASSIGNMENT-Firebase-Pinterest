const navBar = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
        <a class="navbar-brand title" href="#">Pinterest</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-boards">
                All Boards <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="all-pins">Pins <span class="sr-only">(current)</span>
              </a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Board Titles"
              aria-label="Search"
            />
            </li>
            <li class="nav-item">
            <button class="nav-link" href="#" type="button" id="logout-button" style="background: black; align-item: center;">Log Out</button>
            </li>
          </ul>
        </div>
      </nav>`;
};

export default navBar;
