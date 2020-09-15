var fixedRect, movingRect;
var g1,g2,g3,g4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

g1 = createSprite(200,100,50,50);
g2 = createSprite(400,100,50,50);
g3 = createSprite(600,100,50,50);
g4 = createSprite(800,100,50,50);
g1.shapeColor = "green";
g2.shapeColor = "brown";
g3.shapeColor = "yellow";
g4.shapeColor = "red";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,g4)){
    movingRect.shapeColor = "purple";
    g4.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "white";
    g4.shapeColor = "white";
  }


  drawSprites();
}

function isTouching(ob1,ob2){
  
  if (ob2.x - ob1.x < ob1.width/2 + ob2.width/2
    && ob1.x - ob2.x < ob1.width/2 + ob2.width/2
    && ob2.y - ob1.y < ob1.height/2 + ob2.height/2
    && ob1.y - ob2.y < ob1.height/2 + ob2.height/2) {
      return true;

}
else {
  return false;

}

}
