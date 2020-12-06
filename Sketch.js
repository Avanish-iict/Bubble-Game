//Creating the score variable:
var score = 0;
var monster;
var monsterIMG;

function preload(){
baground = loadImage("BubbleG/pngtree-fresh-blue-sky-green-background-cartoon-image_270457.jpg");
blowerIMG = loadImage("BubbleG/dd6judb-9064a445-266e-4fda-9e95-e4461d140aab.png");
bottleIMG = loadImage("BubbleG/png-transparent-lotion-shower-gel-shampoo-bathing-cartoon-shower-gel-cartoon-character-furniture-bathroom-thumbnail.png");
bubbleIMG = loadImage("BubbleG/5319969-blue-circle-png-pictures-trzcacakrs-blue-circle-png-600_600_preview.png");
monsterIMG = loadImage("BubbleG/4daede3c44ed3d800af5aecabd300ca0.png");
gameOverIMG = loadImage("BubbleG/26-512.png")
}

function setup() {
 createCanvas(900, 400);

monster = createSprite(400,0,50,50);
monster.scale = 0.1
monster.visible = true;

//Creating the blower sprite:
blower = createSprite(200,300,80,80);
 blower.addImage(blowerIMG);
 blower.scale = 0.2

//Creating the bottle sprite:
bottle = createSprite(590,300,80,80)
bottle.addImage(bottleIMG);
bottle.scale = 0.3

//Creating the bubble sprite:
bubble = createSprite(blower.x,blower.y,20,20)
bubble.addImage(bubbleIMG);
bubble.scale = 0.1
bubble.visible = false;
}
    
function draw() {
rectMode(CENTER);
background(baground);

//Giving a function to the blower to move when the mouse moves:
blower.x = World.mouseX;
blower.y = World.mouseY;


//'if' condition-1:
if(keyDown("space")){
    bubble.velocityY = -6;
    bubble.visible = true;
}

//'if' condition-2:
if(bubble.y<0){
//Creating the bubble sprite:
bubble = createSprite(blower.x,blower.y,20,20)
bubble.addImage(bubbleIMG);
bubble.scale = 0.1
bubble.visible = false;
}

//'if' condition-3:
if(World.frameCount%90 === 0){
 monster = createSprite(200,0,50,50);
monster.velocityY = 4;
monster.addImage(monsterIMG);
monster.scale = 0.1

monster.y = random(60,40);
monster.x = random(200,790);

bottle.visible = false;
}

//'if' condition-4:
if(bubble.isTouching(monster)){
var gameOver = createSprite(400,200,10,10);
gameOver.addImage(gameOverIMG)
gameOver.scale = 0.6
blower.destroy();
}

    
drawSprites();
textSize(20);
fill("red");
textFont("Algerian");
text("First deep the blower into the bottle and press space for the bubbles to come out.",5,40);
}