var explorer, expWalking
var bg, bgImg
var ground
var lion, lionImg
var tucanImg, boulderImg
var obstacle
var life = 2
var obstaclesGroup
var replay,replayImg
var gameState="play"

function preload() {
  expWalking = loadAnimation("assets/E1 (2).png", "assets/E2 (2).png", "assets/E3 (2).png", "assets/E4 (2).png", "assets/E5 (2).png",)
  bgImg = loadImage("assets/background2.jpg")
  lionImg = loadImage("assets/lion.png")
  tucanImg = loadImage("assets/tucan.png")
  boulderImg = loadImage("assets/boulder.png")
  obstaclesGroup = new Group();
  replayImg = loadImage("assets/replay.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2)
  bg.addImage(bgImg)
  bg.scale = 3.2
  bg.velocityX = -3

  explorer = createSprite(150, 200, 50, 50);
  explorer.scale = 0.7
  explorer.addAnimation("walking", expWalking)



  ground = createSprite(width / 2, height - 50, 1000, 10)
  ground.visible = false

  replay = createSprite(width/2,height/2)
  replay.addImage(replayImg)
  replay.scale = 0.25
  replay.visible = false




}


function draw() {
  background(" green");
  if(gameState=="play"){
    if (bg.x < 0) {
      bg.x = width / 2
    }
     //gravity
  explorer.velocityY = explorer.velocityY + 0.5
  explorer.collide(ground)
  //explorer jumping
  if (keyDown("UP_ARROW") && explorer.y > 450) {
    explorer.velocityY = -15
  }
  if (frameCount % 50 == 0) {
    createObstacles()
  }

  if(explorer.isTouching(obstaclesGroup)){
    console.log("collison")
    life=life-1
   
    gameState="end"
    
      }
  }

  else if(gameState=="end"){
explorer.velocityY=0
obstaclesGroup.setVelocityXEach(0)
bg.velocityX = 0
replay.visible = true


  }
  console.log(gameState)  
  

 

  

  drawSprites();
  textSize(30)
  fill("green")
  text("Lives Left:" + life, 100, 100)

 

  }





//keep ducking images ready




function createObstacles() {

  var random_num = Math.round(random(1,3))
  
  console.log(random_num)
  obstacle = createSprite(width, height - 100)
  obstacle.velocityX = -3
  if (random_num == 1) {
    obstacle.addImage(lionImg)
    obstacle.scale = 0.5
  }

  if (random_num == 2) {
    obstacle.addImage(tucanImg)
    obstacle.y = Math.round(random(100, height - 100))
    obstacle.scale = 0.5
  }

  if(random_num==3) {
    obstacle.addImage(boulderImg)
    obstacle.scale = 0.25
  }

  obstaclesGroup.add(obstacle)






}

function reset(){
console.log("1")
}