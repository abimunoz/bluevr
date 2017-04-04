  ////////////
 // CREATE //
////////////
$(document).ready(function(){
  $('#create').click(function(e){
    const scene = $('#scene');
    const geometry = $('#geometry').val();
    const color = $('#color').val();
    const x = $('#x').val();
    const y = $('#y').val();
    const z = $('#z').val();

    const data = {
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
      </a-entity>`
      scene.append(component)

    $.post('/create', {data: data}, function(res){
      window.location = '/'
      console.log(res);
    })
  })
});
