const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;
var board,die,bluePiece;
var blueSpases,blueMoved;

function preload() {
  board = loadImage("images/background.png");
}
function drawdie(x,y,side) {
  fill("white");
  strokeWeight(8);
  rectMode(CENTER);
  rect(x,y,100,100,20);
  fill ("black");
  strokeWeight(3);
  if (side === 1){
    circle (x,y,20);
    }
   else if( side === 2){
   circle (x-25,y-25,20);
    circle (x+25,y+25,20);
   }
   else if( side === 3){
    circle (x-25,y-25,20);
    circle( x,y,20);
     circle (x+25,y+25,20);
    }
    else if( side === 4){
      circle (x-25,y-25,20);
       circle (x+25,y+25,20);
       circle (x-25,y+25,20);
       circle (x+25,y-25,20);
      }
      else if( side === 5){
        circle (x-25,y-25,20);
         circle (x+25,y+25,20);
         circle (x,y,20);
         circle (x-25,y+25,20);
         circle (x+25,y-25,20);
        }
        else if( side === 6){
          circle (x-25,y-25,20);
           circle (x+25,y+25,20);
           circle (x-25,y,20);
           circle (x+25,y,20);
           circle (x-25,y+25,20);
           circle (x+25,y-25,20);
          }
    }
function staries(){
  //laders
  if( blueSpases === 2){
    Matter.Body.setVelocity(bluePiece.body,{x:7,y:-13});
    blueSpases = 23;
  }
  if( blueSpases === 6){
    Matter.Body.setVelocity(bluePiece.body,{x:-7,y:-26});
    blueSpases = 45;
  }
  if( blueSpases === 20){
    Matter.Body.setVelocity(bluePiece.body,{x:7,y:-26});
    blueSpases = 59;
  }
  if( blueSpases === 28){
    Matter.Body.setVelocity(bluePiece.body,{x:7,y:-13});
    blueSpases = 49;
  }
  if( blueSpases === 57 ){
    Matter.Body.setVelocity(bluePiece.body,{x:7,y:-26});
    blueSpases = 96;
  }
  if( blueSpases === 71){
    Matter.Body.setVelocity(bluePiece.body,{x:7,y:-13});
    blueSpases = 92;
  }
  if( blueSpases === 52){
    Matter.Body.setVelocity(bluePiece.body,{x:0,y:-13});
    blueSpases = 72;
  }
//snake
if( blueSpases === 50){
  Matter.Body.setVelocity(bluePiece.body,{x:-32,y:26});
  blueSpases = 5;
}
if( blueSpases === 56){
  Matter.Body.setVelocity(bluePiece.body,{x:20,y:33});
  blueSpases = 8;
}
if( blueSpases === 73){
  Matter.Body.setVelocity(bluePiece.body,{x:-13,y:33});
  blueSpases = 15;
}
if( blueSpases === 43){
  Matter.Body.setVelocity(bluePiece.body,{x:7,y:20});
  blueSpases = 17;
}
if( blueSpases === 98 ){
  Matter.Body.setVelocity(bluePiece.body,{x:-14,y:39});
  blueSpases = 40;
}
if( blueSpases === 87){
  Matter.Body.setVelocity(bluePiece.body,{x:12,y:26});
  blueSpases = 49;
}
if( blueSpases === 84){
  Matter.Body.setVelocity(bluePiece.body,{x:-7,y:13});
  blueSpases = 58;
}

}

function setup() {
  createCanvas(600,725);
  engine = Engine.create();
  world = engine.world;
  //setGravity to 0
  engine.world.gravity.y = 0;
  die = [false,1,0,false,0];

  
  
  bluePiece = new Blue(20,570,40,40);
  blueSpases = 1;
  blueMoved = false;
  
}
 
function draw() {
    background (158,113,79);
    Engine.update(engine);
    imageMode (CENTER);
    image(board,300,300,600,600);
    bluePiece.display();
if (die[3]=== false){
  drawdie(525,665,die[1]);
}
else { if (die[4]%2 === 0){
  drawdie (525,665,die[1]);
  if(blueMoved === false && blueSpases!= 100){
    if (blueSpases%10 === 0) {
      bluePiece.moveup();
       }
    else{ 
       var num = Math.floor(blueSpases/10);
       if (num === 0||num === 2 || num === 4 || num === 6 || num === 8){
        bluePiece.moveright();
       }
       else {
         bluePiece.moveleft();
       }
    }
    blueMoved = true;
    blueSpases++;
    console.log(blueSpases);
  }
}
if (frameCount%15 === 0){
  die[4]--
  blueMoved = false;
  if (die[4]===0){
    die[3]=0;
    die[0]=false;
     staries()
    
  }
}

}
if (die[0]=== true&&die[2]>0&&frameCount%5===0){
  die[2]--;
  die[1]++;
  if (die[1]>6){
    die[1]=1;
  }
  if (die[2]=== 0 ){
    die[3]= true;
    die[4]=die[1]*2;
  }
}
    console.log (bluePiece.body.position.x);
    
  }
  function keyPressed(){
    if(keyCode === 32&&die[0]===false){
      die[0]=true
      die[2]=round(random(12,18));
    }
  }
  