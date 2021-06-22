var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

var mouse_down = false;
var current;
var past;


server.on('connect', function(s){
  server.emit('connected js'+ server.id);
  
});
  
tutorial.addEventListener('mousedown', function (event) {
  mouse_down = true;
});
tutorial.addEventListener('mouseup', function (event) {
  mouse_down = false;
  past = null;
});
tutorial.addEventListener('mousemove', function (event) {
  if (mouse_down) {
    current = [event.offsetX, event.offsetY];
    if (past) {
      draw(past, current);
    }
    past = [event.offsetX, event.offsetY];
  }
  
});

function draw (past, current) {
  server.emit('drawing', {past, current});
  ctx.moveTo(past[0], past[1]);
  ctx.quadraticCurveTo(
    past[0], past[1],
    current[0], current[1]
  );
  ctx.stroke();
  ctx.closePath();
}

 


