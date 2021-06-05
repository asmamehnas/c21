var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  sujal =createSprite(200,200,70,70)
  sujal.shapeColor="blue";

 thirumallesh = createSprite(600,600,80,90);
  thirumallesh.shapeColor="white"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="yellow";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  if(isTouching(sujal,movingRect)){
    sujal.shapeColor="white"
  }

  if(isTouching(thirumallesh,movingRect)){
    thirumallesh.velocityY = -3;
  }
  drawSprites();
}

function isTouching(o1,o2){

  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
 return true;
}
else {
 return false;
}
}