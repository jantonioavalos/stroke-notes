/***********
 Description V1:
* English Version
* Canvas Size of Current Window Size
* Save Canvas in Downloads file
* Clear the whole Canvas, Button

Update V2:
* Draw only while mouse is pressed
* Erase last sketch (Double Click)
* Instructions on Phantom Text

On Next Updates:
* Select Primary Colors
* Select Line Width
* Color & Width Mouse Shadow
***********/

//document.addEventListener("Mousedown", x1);
//document.addEventListener("Mouseup", x2);
//document.addEventListener("Mousemove", x3);

var arrows = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var clear = document.getElementById("btnClear");
var canvas = document.getElementById("board");
//canvas.style.backgroundColor = '#faf4ea'; //why didnt work
var paper = canvas.getContext("2d"); //Bidimentional canvas
var x, y;

downloadLnk.addEventListener('click', download, false);
clear.addEventListener("click", clearCanvas);
document.addEventListener("keydown", drawMovement);


//Setting Workspace (Canvas Paper)
clearCanvas();



function drawLine(lineColor, x0, y0, x1, y1, paper){
  paper.beginPath();
  paper.strokeStyle = lineColor;
  paper.lineWidth = 5;
  paper.moveTo(x0,y0);
  paper.lineTo(x1,y1);
  paper.stroke();
  paper.closePath();
}

function drawMovement(testEvent){
  var color = "black";
  var mov = 10;
  switch(testEvent.keyCode){
    case arrows.LEFT:
      drawLine(color, x, y, x-mov, y, paper);
      x = x-mov;
      break;
    case arrows.UP:
      drawLine(color, x, y, x, y-mov, paper);
      y = y-mov;
      break;
    case arrows.RIGHT:
      drawLine(color, x, y, x+mov, y, paper);
      x = x+mov;
      break;
    case arrows.DOWN:
      drawLine(color, x, y, x, y+mov, paper);
      y = y+mov;
      break;
    default:
      console.log("No Arrow-Key")
  }
}

function clearCanvas(){
  //Getting Canvas Size according to Window Size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  paper.fillStyle = "#faf4ea";
  paper.fillRect(0, 0, canvas.width, canvas.height);
  //Cursor placed in the canvas middle
  x= canvas.width/2;
  y= canvas.height/2;
  //Placing a cross in the center
  drawLine("red", x-10, y, x+10, y, paper);
  drawLine("red", x, y-10, x, y+10, paper);
  //Writing Instructions in Phantom Text

}

function download() {
    var dt = canvas.toDataURL('image/png');
    this.href = dt;
    //http://stackoverflow.com/questions/17397319/save-canvas-as-jpg-to-desktop
};
