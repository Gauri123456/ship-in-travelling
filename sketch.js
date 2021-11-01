var sea,ship;
var sea; 

function preload(){
sea=loadImage("sea.png");
ship=loadImage("ship1.png,ship2.png,ship3.png,ship4.png");

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
  spritName.addImage(seaImg);
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}