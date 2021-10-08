var ship,piship
var gameState="First"
var  pirateLeftGroup

function preload(){
     back=loadImage("images/background.jpg")
     sim=loadImage("images/ship.png")
     psim=loadImage("images/pirateship.png")
     cannon=loadImage("images/can.png")
     cannon2=loadImage("images/canno.png")
     po=loadImage("images/po.png")
     po1=loadImage("images/pol.png")
     po2=loadImage("images/police.png")
     pirateImg=loadImage("images/pir.png")
     cball=loadImage("images/ball.png")
     bu=loadImage("images/bullet.png")
}

function setup(){
    createCanvas(1700,windowHeight)
    //policehShip
    ship=createSprite(670,470,20,20)
    ship.addImage(sim)
    ship.scale=0.8
    //pirateship
    piship=createSprite(1470,400,20,20)
    piship.addImage(psim)
    piship.scale=0.7

    canIsland=createSprite(290,335,40,40)
    canIsland.addImage(cannon)
    canIsland.scale=0.3
   
    canShip=createSprite(1360,480,40,40)
    canShip.addImage(cannon2)
    canShip.scale=0.3

    police=createSprite(805,450,40,40)
    police.addImage(po)
    police.scale=0.3

    police1=createSprite(670,400,40,40)
    police1.addImage(po1)
    police1.scale=0.3

    police2=createSprite(535,440,40,40)
    police2.addImage(po2)
    police2.scale=0.4

    pirate=createSprite(150,320,40,40)
    pirate.addImage(pirateImg)
    pirate.scale=0.8

    form=new Form()
    form.instructionScreen()

    pirateLeftGroup=new Group()

}

function draw(){
    if(gameState==="START") {
    background(back)
    textSize(20)
    text("x"+mouseX+"y"+mouseY,mouseX,mouseY)

  //moving policehShip
    if(keyDown(UP_ARROW)&&ship.y>=350){
        ship.y=ship.y-5
    }
    if(keyDown(DOWN_ARROW)&&ship.y<=580){
        ship.y=ship.y+5
    }

    if(keyDown(RIGHT_ARROW)&&ship.x<=1000){
        ship.x=ship.x+5
    }

     if(keyDown(LEFT_ARROW)&&ship.x>=550){
        ship.x=ship.x-5
    }

    //move police with ship
    police1.x=ship.x+50
    police1.y=ship.y-120

    police2.x=ship.x-110
    police2.y=ship.y-90

    police.x=ship.x+135
    police.y=ship.y-80

    pirateLeftBulletCannon() 

pirateLeftGroup.overlap(police1,function(pi,po){
po.remove()
})

drawSprites()
    }
}


function pirateLeftBulletCannon() {
    if (frameCount % 60 === 0) {
        //left bullet
        bullet = createSprite(200,275,40,10);
        bullet.addImage(bu);
        bullet.scale = 0.1;
        bullet.velocityX = 7;
        bullet.lifetime = 240;
        pirateLeftGroup.add(bullet)
    }
        if (frameCount % 200 === 0) {
        //cannon left
      cannonBall = createSprite(350,300,40,10);
      cannonBall.addImage(cball);
      cannonBall.scale = 0.2;
      cannonBall.velocityX = 4;
      cannonBall.lifetime = 240;
      pirateLeftGroup.add(cannonBall)
     
      }
    }
      

//form with instructions
//xyz keys-NEXT CLASS

//remove background of all images

//pirate left -shoot bullet 
//left cannon -shoot cannon balls

//pirateright-shoot bullets
//right cannon -shoot cannon balls

//police gp and check for collisions
//right pirates and cannons in a group
//then check for collision

//button -police bullet will change to laser bullet 
//life and score