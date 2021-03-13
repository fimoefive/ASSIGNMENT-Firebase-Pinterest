const showBoards = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add Board</button>';

  document.querySelector('#header').innerHTML = '<h1>Boards</h1>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 200px; width: 200px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
        </div>
      </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#display-area').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
