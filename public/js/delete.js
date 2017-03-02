  ////////////
 // DELETE //
////////////
$(document).ready(function(){
  $('#delete').click(function(e){
    console.log('clicked');
    $.ajax({
      url: '/delete',
      type: 'DELETE',
      success: function(result) {
          e.target.parentElement.remove();
          window.location = '/'
      }
    })
  })
});
