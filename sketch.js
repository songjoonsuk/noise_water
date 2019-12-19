
let yoff = 0.0; 
let keyflag = 0;

let low ;
let high ;
let low_init;
let high_init;



function preload() {
   img = loadImage('logo1.png'); // Load the image
}

function setup() {
  createCanvas(1900, 1050);
  low_init = height*2/3;
  high_init = height*3/4;

  low = low_init;
  high = high_init;
/*  
  console.log(low);
  console.log(high); 
*/
}

function draw() {
  background(255);
  image(img, width/40, height/20 , width/10 , height/10 );

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
  keyflag -= 0.002;

  low += 0.072;
  high -= 0.079;

/*
  console.log(low);
  console.log(high); 
  console.log(keyflag); 
*/ 

 if(keyflag < 0.002) {
    keyflag = 0;

    low = low_init;
    high = high_init;

  }
}  

  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function mousePressed() {
  impact();
}

function keyPressed() {
  
  if (key >= 'a' && key <= 'z') {
    impact();  
  }
}

function impact() {
  keyflag = 0.60;

  low = low_init - (low_init*0.03);
  high = high_init + (high_init*0.03);
}


