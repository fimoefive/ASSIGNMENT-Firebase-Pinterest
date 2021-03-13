import selectBoard from '../selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <input type="text" class="form-control" id="content" placeholder="Pin Content" required>
      </div>
      <button type="button" id="update-pin--${pinObject.firebaseKey}" class="btn btn-primary">Update Pin</button>
    </form>`;
  selectBoard(pinObject);
};

export default editPinForm;
