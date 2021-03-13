const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add Pin</button>';

  document.querySelector('#header').innerHTML = '<h1>Pins</h1>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card" id="pin-card">
    <img id="pin-image" class="card-img-top" src=${item.image} alt=${item.title} style="height: 200px; width: 200px;">
    <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${item.title}</h5>
      <hr>
      <p>${item.content}</p>
      <i class="far fa-edit" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}"></i>
      <button class="btn btn-danger" id="deletePin--${item.firebaseKey}">Delete Pin</button>
      </div>
    </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#display-area').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
