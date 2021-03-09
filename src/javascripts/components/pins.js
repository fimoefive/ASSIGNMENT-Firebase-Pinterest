const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add Pin</button>';

  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
    <div class="card">
      <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${item.title}</h5>
      <hr>
      <p>${item.description}</p>
      <button class="btn btn-danger" id="delete---${item.firebaseKey}">Delete Pin</button>
      </div>
    </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#store').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
