$(document).ready(function(){
  $('#submit').click(function(e){
    console.log('click');
    const input = $('#input').val();
    console.log(input);
    const aframeText = $('#aframeText');
    aframeText.append(input);
  })
})
