var tongue;
var wink;
var butt
var sit;

function preload() {

butt = createSprite(200, 200, 100, 100);
tongue = createSprite(200, 150, 100, 100);


tongue.addAnimation("assets/1.png", "assets/2.png", "assets/3.png","assets/4.png","assets/5.png","assets/6.png", "assets/7.png", "assets/8.png");

wink = loadAnimation("assets/a.png", "assets/b.png", "assets/c.png", "assets/d.png", "assets/e.png");

butt.addAnimation("floating","assets/w1.png","assets/w2.png","assets/w3.png","assets/w4.png","assets/w5.png","assets/w6.png",)

sit = loadAnimation("assets/h1.png","assets/h2.png","assets/h3.png")
}

function setup() {
  createCanvas(800,300);

  wink.frameDelay = 10;
  sit.frameDelay = 10;
  tongue.frameDelay = 9;
  butt.frameDelay = 9;
}

function draw() {
  background(255,255,255);

  //animation(tongue, 300, 150);
  animation(wink, 500, 150);
  //animation(butt, 100, 150);
  animation(sit, 700, 150);


butt.attractionPoint(.2, mouseX, mouseY);
//since the force keeps incrementing the speed you can
//set a limit to it with maxSpeed
butt.maxSpeed = 5;

drawSprites();


if(mouseIsPressed) {
   butt.rotation -= 10;
   //wink.changeAnimation("spinning");
 }
 else{
   butt.rotation = 0;

 }

 if(keyIsDown(UP_ARROW))
   wink.scale += 0.05;
 if(keyIsDown(DOWN_ARROW))
   wink.scale -= 0.05;
}
