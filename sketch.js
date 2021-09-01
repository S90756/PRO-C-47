var space, spaceimg
var spaceship, spaceshipimg
var asteroid, asteroidimg, asteroidGroup
var laser, laserGroup
var edges
var score=0
function preload() {
  spaceimg = loadImage("space.png")
  spaceshipimg = loadImage("spaceship3.gif")
  asteroidimg = loadImage("asteroid1.gif")

}


function setup() {
  createCanvas(800, 400);
  space = createSprite(400, 200)
  space.addImage(spaceimg)
  spaceship = createSprite(400, 350, 40, 20)
  spaceship.addImage(spaceshipimg)
  spaceship.scale = 0.2
  asteroidGroup = new Group()
  laserGroup= new Group()
  edges= createEdgeSprites()


}
function spawnAsteroids() {
  if (frameCount % 60 === 0) {

    asteroid = createSprite(400, -10, 10, 10)
    asteroid.x = Math.round(random(100, 700))
    asteroid.addImage(asteroidimg)
    asteroid.scale = random(0.5, 1)
    asteroid.velocityY = random(1, 2)+score/100
    asteroid.lifetime = 200;
    asteroidGroup.add(asteroid)
  }
}

function draw() {
  background(255, 255, 255);
 
  if (keyDown(LEFT_ARROW)) {
    spaceship.x = spaceship.x - 5

  }
  if (keyDown(RIGHT_ARROW)) {
    spaceship.x = spaceship.x + 5
  }

  if (keyDown("SPACE")) {
    shootLasers()
  }
  if(asteroidGroup.isTouching(laserGroup)){
    console.log("inside")
   asteroidGroup.destroyEach();
   score=score+10

  }
  spawnAsteroids();
  drawSprites();
  fill("white")
  text("score:"+score,50,50)
}
function shootLasers(){
  laser = createSprite(spaceship.x,spaceship.y, 5, 5)
  laser.shapeColor = "red"
  laser.velocityY = -2
  laserGroup.add(laser)

}