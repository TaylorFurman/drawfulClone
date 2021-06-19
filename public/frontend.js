var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
var current;
var past;



var mouse_down = false;
canvas.addEventListener('mousedown', function (event) {
    mouse_down = true;
  });
  canvas.addEventListener('mouseup', function (event) {
    mouse_down = false;
    past = null;
  });
  canvas.addEventListener('mousemove', function (event) {
    if (mouse_down) {
      current = [event.offsetX, event.offsetY];
      if (past) {
        draw(past, current);
      }
      past = [event.offsetX, event.offsetY];
    }
  });

function draw (past, current) {
    ctx.moveTo(past[0], past[1]);
    ctx.quadraticCurveTo(
      past[0], past[1],
      current[0], current[1]
    );
    ctx.stroke();
    ctx.closePath();
  }


  
  