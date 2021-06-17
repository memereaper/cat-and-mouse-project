
var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadImage("images/mouse4.png")
    catImg4 = loadImage("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600)
    cat.addAnimation("cat",catimg1)
    cat.scale = 0.1;

    mouse = createSprite(200,600)
    mouse.addAnimation("mouse",mouseImg1)
    mouse.scale = 0.1

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("happy",catImg4)
        cat.changeAnimation("happy")
        mouse.addAnimation("happyMouse",mouseImg3)
        mouse.changeAnimation("happyMouse")
        
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;
}

    if (keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25;
        cat.velocityX = -2;
        cat.addAnimation("catRunning",catImg2)
        cat.changeAnimation("catRunning")
    }

}
