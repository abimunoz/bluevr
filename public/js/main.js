// COMPONENT CREATED FROM INPUT VALUE
$(document).ready(function(){
  $('#submit').click(function(e){
    const scene = $('#scene');
    const text = $('#text').val();
    const geometry = $('#geometry').val();
    const color = $('#color').val();
    const x = $('#x').val();
    const y = $('#y').val();
    const z = $('#z').val();
    const component = `<a-entity
        geometry="primitive: ${geometry}; width: 4; height: 4"
        material="color: ${color}"
        position="${x} ${y} ${z}"
        text="value: ${text}"></a-entity>`
        scene.append(component)
  })
});




// CHANGES VALUE OF INNER TEXT TO INPUT VALUE
// $(document).ready(function(){
//   $('#submit').click(function(e){
//     const aframeText = $('#aframeText');
//     const input = $('#input').val();
//     aframeText.attr('text', `value:${input}`)
//   })
// });


// APPENDS AFRAME TEXT COMPONENT TO SCENE
// $(document).ready(function(){
//   $('#submit').click(function(e){
//     const scene = $('#scene');
//     const component = `<a-entity
//     id="aframeText"
//     geometry="primitive: plane; width: 4; height: 4"
//     material="color: red"
//     position="0 2 -5"
//     text="value: This text will be 4 units wide."></a-entity>`
//     scene.append(component)
//   })
// });
