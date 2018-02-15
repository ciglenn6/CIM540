var centerX = 250;
var centerY = 250;
var carnival;

function preload() {
carnival = loadImage("assets/carnival.jpg");
}

function setup() {
    createCanvas(500, 500);

}

function draw() {
  background(255);
  image(carnival,0,0);

  fill(255, 255, 255);

  strokeWeight(1);
  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
  ellipse(centerX, centerY + 10, 20, 20);
  //eyse
  ellipse(centerX - 10, centerY - 10, 10, 20);
  ellipse(centerX + 10, centerY - 10, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

  noFill();
  strokeWeight(4);
  arc(centerX, centerY, 100, 100, 0, PI);
  strokeWeight(30);
  arc(centerX, centerY, 100, 100, PI, TWO_PI);

}
