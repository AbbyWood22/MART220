function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //infinte plate
  fill(131, 166, 3);
  ellipse(200, 300, 750, 750);
  fill(70, 89, 2);
  ellipse(200, 300, 650, 650);
  fill( 242, 159, 5);
  ellipse(200, 300, 550, 550);
  fill(131, 166, 3);
  ellipse(200, 300, 450, 450);
  fill(70, 89, 2);
  ellipse(200, 300, 350, 350);
  fill( 242, 159, 5);
  ellipse(200, 300, 250, 250);
  
  //my baked potato 
  fill(217, 162, 95);
  ellipse(200,300,200,150);
  
  //potato cut
  fill(255);
  triangle(200, 225, 290, 270, 105, 275);
  
  //dark spots on potato
  fill(140, 89, 70);
  circle(250,300,20);
  circle(150,330,20);
  
  //green things and cheese 
  fill(131, 166, 3);
  rect(200,240,10,20);
  fill(70, 89, 2);
  rect(210,240,10,20);
  fill( 242, 159, 5);
  rect(215,240,10,20);
  fill(131, 166, 3);
  rect(220,240,10,20);
  fill(70, 89, 2);
  rect(225,240,10,20);
  fill( 242, 159, 5);
  rect(190,240,10,20);
  rect(180,240,10,20);
  fill(131, 166, 3);
  rect(175,240,10,20);
  fill(70, 89, 2);
  rect(170,240,10,20);
}