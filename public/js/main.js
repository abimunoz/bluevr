// d = document.querySelector('#aframeText');
// console.log(d);
// d.setAttribute('text', "value: 'hi'");
// console.log(d);

$(document).ready(function(){
  $('#submit').click(function(e){
    const aframeText = $('#aframeText');
    const input = $('#input').val();
    aframeText.attr('text', `value:${input}`)
  })
});
