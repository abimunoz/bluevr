  ///////////
 // CLICK //
///////////
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    this.el.addEventListener('click', function (evt) {
      let randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      newColor = COLORS[randomIndex];
      let data = {color: newColor};
      let id = this.id;
      updateEntity(id, data);
      // console.log('I was clicked at: ', evt.detail.intersection.point);
      // console.log('this', this.id);
      // console.log('evt', evt);
      // console.log(randomIndex);
      // console.log(COLORS[randomIndex]);
    });
  }
});


  ////////////
 // UPDATE //
////////////
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
}
