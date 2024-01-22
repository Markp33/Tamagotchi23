let normal = [
  [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 1, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 4, 4, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    ]
    ,
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0],
      [0, 0, 1, 1, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 4, 4, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    ]
    , [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 3, 3, 1, 2, 1, 2, 1, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 4, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0],
      [0, 0, 1, 4, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0],
      [0, 0, 1, 1, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 4, 4, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    ]
  ]
]

let timerOn = false
let startTime;
let lastPassed = 0;
let m_Timer = 1500;
let shopbuttonPress = false
let addCoin = 0
let barWidth;
let barHeight = 20;
let currFrame = 0;
let currArt = 0;


function skipToNextFrame() {

  console.log("hdhdf"+ barWidth+ " "+ width + " " + currFrame)
  if ( 0 < barWidth && barWidth <= width / 2)  {
    currFrame = 1
    
  } else if (barWidth == 0){
    currFrame = 2
  }
  
}
  


function preload() {
  img = loadImage('imgs/lasers.jpg');
}

function setup() {
  createCanvas(900, 800);

  barWidth = width;
  frameRate(400);




  //startstop

  let startButton = createButton('Start!');
  startButton.size(150, 50);
  startButton.position(500, 250);
  startButton.mousePressed(startTimer);

  let stopButton = createButton('Stop');
  stopButton.size(150, 50)
  stopButton.position(650, 250);
  stopButton.mousePressed(stopTimer);


  //4 buttons

  let addTime5 = createButton('+5 min')
  addTime5.size(100, 100)
  addTime5.position(500, 400)
  addTime5.mousePressed(addTime5button)

  let addTime10 = createButton('+10 min')
  addTime10.size(100, 100)
  addTime10.position(700, 400)
  addTime10.mousePressed(addTime10button)

  let addTime0 = createButton('0 min')
  addTime0.size(100, 100)
  addTime0.position(700, 600)
  addTime0.mousePressed(addTime0button)

  let addTime25 = createButton('+25 min')
  addTime25.size(100, 100)
  addTime25.position(500, 600)
  addTime25.mousePressed(addTime25button)

  //etah

  let banaan = createButton('Add banaan    -1')
  banaan.size(100, 100)
  banaan.position(10, 500)
  banaan.mousePressed(banaanbutton)

  let apple = createButton('Add apple         -5')
  apple.size(100, 100)
  apple.position(110, 500)
  apple.mousePressed(applebutton)
  
  let sandwich = createButton('Add sandwich    -10')
  sandwich.size(100, 100)
  sandwich.position(10, 600)
  sandwich.mousePressed(sandwichbutton)
  
  let steak = createButton('Add steak    -15')
  steak.size(100, 100)
  steak.position(110, 600)
  steak.mousePressed(steakbutton)
}

let coins = 0
let img;


function draw() {
  fill("black");
  background(img);
  rect(500, 300, 300, 50);
  line(450, 0, 450, 800);

  if (barWidth > 0) {
    barWidth -= 0.1;
    skipToNextFrame()
  }

  fill('red');
  rect(20, height / 2 - barHeight / 1, barWidth / 3, barHeight); //barwidth

  noStroke();

  let min = floor(m_Timer / 60);
  let sec = m_Timer - (min * 60);

  if (timerOn == true && m_Timer > 1) {
    m_Timer -= deltaTime / 1000;
    timePassed = Math.floor((Date.now() - startTime) / 1000);
    if (timePassed % 4 == 0 && timePassed != lastPassed) { // aantal secs per coins
      coins++;
      lastPassed = timePassed;
    }
  }




  for (let y = 0; y < normal[currArt][currFrame].length; y++) {
    for (let x = 0; x < normal[currArt][currFrame][y].length; x++) {

      if (normal[currArt][currFrame][y][x] == 0) {
        fill("yellow");
      }
      if (normal[currArt][currFrame][y][x] == 1) {
        fill("black");
      }
      if (normal[currArt][currFrame][y][x] == 2) {
        fill("orange");
      }
      if (normal[currArt][currFrame][y][x] == 3) {
        fill("green");
      }
      if (normal[currArt][currFrame][y][x] == 4) {
        fill("red");
      }
      textSize(50);
      text(min + ":" + (floor(sec).toString().padStart(2, '0')), 600, 345);

      rect((x * 15) + 10, (y * 15) + 40, 40, 40);
    }
  }
  fill(225);
  rect(20, 15, 250, 25);
  rect(525, 160, 250, 50);
  fill("black");
  text('Coins:', 550, 200);

  text('Coins:', 50, 50);
  text(coins, 700, 200);
  text(coins, 200, 50);
}





//functionbuttons

function startTimer() {
  timerOn = true;
  startTime = Date.now();
  if (timerOn) barWidth -= 10
}
function stopTimer() {
  timerOn = false;
}
function addTime5button() {
  m_Timer += 300;
}
function addTime10button() {
  m_Timer += 600;
}
function addTime25button() {
  m_Timer += 1500;
}
function addTime0button() {
  m_Timer = 0;
}

//food functions
function banaanbutton() {
  if (coins >= 1) {
barWidth = barWidth + width / 50
coins -= 1
if (barWidth > width){
  barWidth = width
  if (banaanbutton){
  coins -= 1
}}}}
function applebutton() {
  if (coins >= 5) {
barWidth = barWidth + width / 10
coins -= 5
if (barWidth > width){
  barWidth = width
  if (applebutton){
  coins -= 5
}}}}
function sandwichbutton() {
  if (coins >= 10) {
barWidth = barWidth + width / 5
if (barWidth > width){
  barWidth = width
  if (sandwichbutton){
  coins -= 10
}}}}
function steakbutton() {
  if (coins >= 15) {
barWidth = barWidth + width / 1
if (barWidth > width){
  barWidth = width
  if (steakbutton){
  coins -= 15
}}}}






