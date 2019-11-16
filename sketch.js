//Declare Variables & Initalize Variables
var x = 137;
var y = 300;
var lvl1 = true;
var lvl2 = false;
function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  if (lvl1 == true){
    level1();
 }
  if(lvl2 == true){
    level2();
  }
  
  
//when player touches the walls they will be sent back to the starting point

  
  //when player reaches end goal the game is over
  
    
//when the player reaches a certain point ex: y=100 use if statement to go back to starting point.
}
  function level1(){
  background(255);
  walls();
  win();
  obstacles();
  drawLines();
  startingpoint();
  barrier();
  player();

  controls();
  levelcheck();
  }

function level2(){
  background(255);
  textSize(32);
  fill(0);
  text('YOU WIN!', 200, 200);
}
//players controls
    function controls(){
    if (keyIsDown(LEFT_ARROW)) {
    x -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 2;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 2;
  }
}
//The barriers
  function walls(){
  fill(109, 147, 207);
  rect(0, 0, 100, 400);
  //Bottom first wall
  fill(109, 147, 207);
  rect(100, 350, 100, 50);
  //Bottom second wall
  fill(109, 147, 207);
  rect(200, 225, 400, 250);
  //Top wall
  fill(109, 147, 207);
  rect(100, 0, 350, 100);
  //Top second wall
  fill(109, 147, 207);
  rect(450, 0, 100, 25);
  //Right wall
  fill(109, 147, 207);
  rect(550, 0, 50, 225);
  }
function obstacles(){
  //first
  fill(109, 147, 207);
  rect(200, 100, 50, 75);
  //second
  fill(109, 147, 207);
  rect(300, 150, 50, 75);
  //third
  fill(109, 147, 207);
  rect(400, 100, 50, 75);
}

 function player(){
  //The player(red square)
  fill(224, 11, 11);
  rect(x, y, 25, 25);
 }
  function win(){
  //The goal
  fill(90, 227, 52);
  rect(450, 25, 100, 25);
  }
  
  //The starting point
function startingpoint(){
  fill(90, 227, 52);
  rect(100, 325, 100, 25);
}
  function barrier(){
  //middle barrier
  if (x > 175 && y > 200){
  x = 137;
  y = 300;
}
  //Left barrier
  if(x < 100 || y > 325){
  x = 137;
  y = 300;
}
  //top middle barrier
  if(y < 100 && x < 450){
    x = 137;
    y = 300;
  }
  //right and top barrier
  if(y < 25 || x > 525){
    x = 137;
    y = 300;
  }
    //obs 1 barrier
    if(x > 175 && x < 250 && y < 175){
      x = 137;
      y = 300;
    }
    //obs2
    if(x > 275 && x < 350 && y > 125){
      x = 137;
      y = 300;
    }
    //obs3
        if(x > 375 && x < 450 && y < 175 ){
      x = 137;
      y = 300;
    }
}

//walls for the second level
   

function levelcheck (){
  if (x > 450 && y < 50){
    lvl1 = false;
    lvl2 = true;
  }
}



//function mouseReleased() {
  
  
//}



















function mouseClicked() {
  // console.log("X: " + mouseX + " Y: " + mouseY);
}

function drawLines() {
  //draw gridLines
  for (var i = 0; i <= 12; i++) {
    for (var j = 0; j <= 12; j++) {
      if (i % 2 == 0) {
        strokeWeight(3);
      } else {
        strokeWeight(1);
      }
      line(i * 50, 0, i * 50, 400);
      if (j % 2 == 0) {
        strokeWeight(2);
      } else {
        strokeWeight(1);
      }
      line(0, j * 50, 600, j * 50);
    }
  }
  //number x & y axis
  fill(0, 0, 255);
  textSize(26);
  textAlign(LEFT);
  for (var i = 0; i <= 6; i++) {
    text(i * 100, i * 100 - 25, 20);
    text(i * 100, 0, i * 100 + 2);
  }
  text("0", 2, 20);
  fill(0);
}