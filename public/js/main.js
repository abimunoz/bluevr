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

    const data = {
      text: text,
      geometry: geometry,
      color: color,
      x: x,
      y: y,
      z: z
    }

    const component = `<a-entity
      geometry="primitive: ${geometry}; width: 4; height: 4"
      material="color: ${color}"
      position="${x} ${y} ${z}"
      text="value: ${text}"></a-entity>`
      scene.append(component)

    $.post('/create', {data: data}, function(res){
      console.log(res);
    })
  })
});
