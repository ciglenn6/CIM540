var centerX = 250;
var centerY = 250;

var hatetrump;
var lovereese;
var lovedog;
var lovecurry;
var bgImage;
var hatetrumpButton;
var lovereeseButton;
var lovedogButton;
var lovecurryButton;



function preload() {
hatetrump = loadImage("Assets/hatetrump.png");
lovereese = loadImage("Assets/lovereese.png");
lovedog = loadImage("Assets/lovedog.png");
lovecurry = loadImage("Assets/lovecurry.png")
}


function setup() {
  // put setup code here
  createCanvas(500, 500);
   centerX = width / 2;
   centerY = height / 2;

   bgImage = hatetrump;
   hatetrumpButton = createButton('Example 1');
   hatetrumpButton.position(10,10);
   hatetrumpButton.mousePressed(function(){
   bgImage = hatetrump;
   });

   bgImage = lovereese;
   lovereeseButton = createButton('Example 2');
   lovereeseButton.position(150,10);
   lovereeseButton.mousePressed(function(){
   bgImage = lovereese;
   });

   bgImage = lovedog;
   lovedogButton = createButton('Example 3');
   lovedogButton.position(250,10);
   lovedogButton.mousePressed(function(){
   bgImage = lovedog;
   });

   bgImage = lovecurry;
   lovecurryButton = createButton('Example 4');
   lovecurryButton.position(350,10);
   lovecurryButton.mousePressed(function(){
   bgImage = lovecurry;
   });

}



function draw() {
  background(255);
  image(bgImage,0,0);

}
