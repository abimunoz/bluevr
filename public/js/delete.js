  ////////////
 // DELETE //
////////////
$(document).ready(function(){
  $('#delete').click(function(e){
    console.log('clicked');
    $.ajax({
      url: '/delete',
      type: 'DELETE',
      success: function(res) {
          console.log(res)
          window.location = '/'
      }
    })
  })
});
