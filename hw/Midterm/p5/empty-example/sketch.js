var button;

var pics = [];

var imageSize = (320,480);

var b = 0;

var targetPosX = [0,200,400, 600];

var targetPosY = [0,200]

var imageSize = 200;

var centerX = 0;
var centerY = 0;

var bgChange, bgChange1, bgImage2;

var bgImage, bgImage2, currentBgImage;

var hitZoneX = 100;
var hitZoneY = 100;

var changeColor = false;

var randomColor = [255, 255, 255];

var showHide = true;

var showHideButton;

var textShow = true;

function preload() {
    bgImage = loadImage("assets/hatetrump.png");
    bgImage2 = loadImage("assets/lovereese.png");
    bgImage3 = loadImage("assets/lovecurry.png");
    bgImage4 = loadImage("assets/lovedog.png");
    bgImage5 = loadImage("assets/trump.png");
    bgImage6 = loadImage("assets/reese.png");
    bgImage7 = loadImage("assets/curry.png");
    bgImage8 = loadImage("assets/dog.png");
    bgImage9 = loadImage("assets/about.png");
}

function setup() {
  // put setup code here
  createCanvas(500, 500);
   centerX = width / 2;
   centerY = height / 2;

   bgChange = createButton('Example 1');
   bgChange.position(400,70);
   bgChange.mousePressed(bgFunction);

   bgChange1 = createButton('Example 2');
   bgChange1.position(400,170);
   bgChange1.mousePressed(bgFunction1);

   bgChange2 = createButton('Example 3');
   bgChange2.position(400,260);
   bgChange2.mousePressed(bgFunction2);

   bgChange3 = createButton('Example 4');
   bgChange3.position(400,420);
   bgChange3.mousePressed(bgFunction3);

   bgChange4 = createButton('About this Project');
   bgChange4.position(300,500);
   bgChange4.mousePressed(bgFunction4);

   currentBgImage = bgImage;
}


function draw() {
  // put drawing code here
  background(255);
  image(currentBgImage, 0, 0, 100,400);

  image(bgImage5,200,0,300,100);
  image(bgImage6,200,100,300,100);
  image(bgImage7,200,200,300,100);
  image(bgImage8,200,300,200,200);


   if (changeColor == true) {
       randomColor[0] = random(256);
       randomColor[1] = random(256);
       randomColor[2] = random(256);
}

}

function mousePressed() {
  var d = dist(mouseX, mouseY, 360, 200);
    if (d < 100) {
      // Pick new random color values
      r = random(255);
      g = random(255);
      b = random(255);
    }

  }

    function bgFunction(){
    currentBgImage = bgImage;
}

function bgFunction1(){
    currentBgImage = bgImage2;
}

function bgFunction2(){
    currentBgImage = bgImage3;
}
function bgFunction3(){
    currentBgImage = bgImage4;
}

function bgFunction4(){
    currentBgImage = bgImage9;
}
