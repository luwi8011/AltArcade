var serial; // variable to hold an instance of the serialport library
var sensorValue = 0; // ellipse position
var sensorValue2 = 0;

function setup() {

  createCanvas(600, 400);
  serial = new p5.SerialPort(); // make a new instance of  serialport library
  
  serial.on('data', serialEvent); // callback for new data coming in
  serial.list(); // list the serial ports
  serial.open("COM3"); // open a port  
  frame();
}

function draw() {
  //fill(230, 219, 222);
  dot();
}

function dot() {
  noStroke();
  fill(0);
  // draw an ellipse at location X,Y of size 2x2
  ellipse(sensorValue, sensorValue2, 2, 2);
}
// drawing the etch a sketch body
function frame() {
  strokeWeight(120);
  noFill();
  stroke(191, 26, 20);
  // outside rectangle
  strokeJoin(ROUND);
  rect(0, 0, 600, 400);
  fill(230, 219, 222);

   
  noStroke();
  fill(255);
  // the knobs
  ellipse(30, 365, 50, 50);
  ellipse(570, 365, 50, 50);


  
   // inside rectangle
  fill(229, 218, 221);
  stroke(230, 219, 222);
  strokeWeight(31);
  strokeJoin(ROUND);
  rect(70, 70, 460, 260);
 

}




// this is where all the drawing happens
function serialEvent() {
  var inString = serial.readLine();
  if (inString.length > 0) {
    inString = inString.trim();
    var vals = split(inString, ',');
// mapping x
    sensorValue = Number(map(vals[0], 0, 1023, 62, width - 62));
    // mapping Y
    sensorValue2 = Number(map(vals[1], 0, 1023, 62, height - 62));
    // println(sensorValue);
  }
}