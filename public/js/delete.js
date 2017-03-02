// // COMPONENT CREATED FROM INPUT VALUE
// $(document).ready(function(){
//   $('#delete').click(function(e){
//     console.log('ccccccllllliiick')
//     // $.ajax({
//     // url: '/delete',
//     // type: 'DELETE',
//     // success: function(result) {
//     //     e.target.parentElement.remove();
//     // }
//     }
//   })
// });


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
})
