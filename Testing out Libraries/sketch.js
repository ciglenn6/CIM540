var face;
function preload() {

face = createSprite(200, 200, 100, 100);


face.addAnimation("assets/7_1.png", "assets/8_1.png", "assets/9.png","assets/10.png","assets/11.png");
}

function setup() {
  createCanvas(800,300);

  face.frameDelay = 10;

}

function draw() {
  background(255,255,255);
  text("hold down my face, 300,0");

  //animation(tongue, 300, 150);
  animation(face, 500, 150);
  //animation(butt, 100, 150);

drawSprites();


if(mouseIsPressed) {
   face.rotation -= 10;
   //wink.changeAnimation("spinning");
 }
 else{
  face.rotation = 0;

 }

 if(keyIsDown(UP_ARROW))
   face.scale += 0.05;
 if(keyIsDown(DOWN_ARROW))
   face.scale -= 0.05;
}
