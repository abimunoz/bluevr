
// The first function was taken from the A-Frame (WebVR) docs and
// changes the color of a component (geometry) on click.
// I modified the function and added function updateEntity
// so that the change of color would occur both
// on the front-end and back-end of the application.
// Comments below signal modifications that I made.

// ==============================================
// CLICK
// ==============================================
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    this.el.addEventListener('click', function (evt) {
      let randomColor = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomColor]);
      // store value of randomColor
      newColor = COLORS[randomColor];
      // color is a property of a predefined Mongoose Schema
      // set newColor as the new value for the key color
      let data = {color: newColor};
      // id is a property of a predefined Mongoose Schema
      let id = this.id;
      updateEntity(id, data);
    });
  }
});


// ==============================================
// UPDATE
// ==============================================
// Makes PUT request with AJAX to update Mongoose Schema
function updateEntity(id, data) {
  $.ajax({
    url: '/' + id,
    type: 'PUT',
    data: data,
    success: function(data) {
      console.log(data);
    }, error: function(err) {
      console.log(err);
    }
  });
};
