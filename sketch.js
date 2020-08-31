//Create variables here
var database,position,dog,happyDog,foodS,foodStock



function preload()
{
	//load images here
dog.loadImage("dogimg.png")
dog2.loadImage("dogimg1.png")

}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  console.log(database)
  
  aaryan = createSprite(200,200,10,10)
  aaryan.loadImage("dogimg.png")
  
  isha = createSprite(200,200,50,50)
  isha.loadImage("dogimg1.png")
}


function draw() {  
   background("white")
 
   if(keyDown(LEFT_ARROW)){
     writeposition(-1,0)
   }
   else if(keyDown(RIGHT_ARROW)){
     writeposition(1,0)
   }
   else if(keyDown(UP_ARROW)){
     writeposition(0,-1)
   }
   else if(keyDown(DOWN_ARROW)){
     writeposition(0,+1)
   }

  drawSprites();
  //add styles here

}

function readPosition(database){
  position=data.val()
  console.log(position) 
  
  aaryan.x = position.x
  isha.y = position.y

}

function writeposition(x,y){
  database.ref("ball/position").set({
    'x' : position.x + x ,
    'y' : position.y + y
  })
}