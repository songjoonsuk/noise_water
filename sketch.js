
let yoff = 0.0; 
let keyflag = 0;

let low = 250;
let high = 350;

function setup() {
  createCanvas(810, 500);
}

function draw() {
  background(255);

  fill(10,140,180);
 
  beginShape();

  let xoff = 0; 
  let y;
  

  for (let x = 0; x <= width; x += 10) {
 
    y = map(noise(xoff, yoff), 0, 1, low, high );


    vertex(x, y);
    xoff += 0.05;   // 0.05
  }
 

  yoff += 0.01;   // 0.01
if ( keyflag ) {
  yoff += keyflag;
  keyflag -= 0.001
  if(keyflag < 0.002) keyflag = 0;

}  


  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function keyPressed() {
  
  if (key >= 'a' && key <= 'z') {
    keyflag = 0.19;
  }
}
