
var canvas;
var music;
var ground1, ground2, ground3, ground4, ground5;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(60, 580, 150, 20);
    ground1.shapeColor = "red";
    ground2 = createSprite(220, 580, 150, 20);
    ground2.shapeColor = "blue";
    ground3 = createSprite(380, 580, 150, 20);
    ground3.shapeColor = "green";
    ground4 = createSprite(540, 580, 150, 20);
    ground4.shapeColor = "pink";
    ground5 = createSprite(700, 580, 150, 20);
    ground5.shapeColor = "yellow";


    //create box sprite and give velocity
    box = createSprite(random(20, 750), 560, 20,20);
    box.velocityX = 4;
    box.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);
    // box.bounceOff(ground2);
    // box.bounceOff(ground3);
    // box.bounceOff(ground4);
    // box.bounceOff(ground5);


    //add condition to check if box touching surface and make it box
    if(ground1.isTouching(box) && box.bounceOff(ground1)){
        box.shapeColor = "red"
    }

    if(ground2.isTouching(box) && box.bounceOff(ground2)){
        box.shapeColor = "blue"
    }

    if(ground3.isTouching(box) && box.bounceOff(ground3)){
        box.shapeColor = "green"
    }

    if(ground4.isTouching(box) && box.bounceOff(ground4)){
        box.shapeColor = "pink"
    }

    if(ground5.isTouching(box) && box.bounceOff(ground5)){
        box.shapeColor = "yellow"
    }

    

    drawSprites();
}
