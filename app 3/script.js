/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW sqrt, DOWN_ARROW , DEGREES, RIGHT_ARROW,
          LEFT_ARROW, collideRectRect, noFill, Clickable, createButton, clear, rotate,
          angleMode, textAlign, CENTER, frameRate, frameCount, SceneManager, createInput, push,pop,translate, textFont,loadFont,createImg*/

let button,
  button1,
  button2,
  button3,
  button4,
  button5,
  fontBold,
  a,
  b,
  bcreate,
  border1,
  b2,
  b3,
  b4,
  b5,
  b6,
  backback;
// function preload(){
//    b = loadImage("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")
//    bcreate = createImg("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")
// }
let foregroundImg, backgroundImg, groundImg, title;
let soundMode, bodyMode, howToPlay;
let startGround, ground, endGroud;
let introSong, coinSound, jumpSound, ran;

function preload() {
  // set the global sound format
  //soundFormats('mp3')
  // load background Images
  backgroundImg = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FBuilding-PNG-Clipart-Background-1.png?v=1596202694678"
  );
  foregroundImg = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FWebp.net-resizeimage%20(1).png?v=1596202387135"
  );
  groundImg = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FWebp.net-resizeimage%20(1).png?v=1596202387135"
  );
  title = loadImage(
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FHero-PNG-File.png?v=1619777096673");
  startGround = loadImage(
    "https://cdn.glitch.com/50920415-fe15-4aea-9ad7-9c53c1fea72d%2FWebp.net-resizeimage%20(1).png?v=1596202387135"
  );
  backback = loadImage("https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F26f692ba4a3112b621fad35ba000c021.png?v=1622116609811")}
;
function setup() {
  let cnv = createCanvas(750, 570);
  background("backback");
  colorMode(HSB, 360, 100, 100);
  frameRate(20);

  var mgr = new SceneManager();
  mgr.fImage = foregroundImg;
  mgr.bImage = backgroundImg;
  mgr.gImage = groundImg;
  mgr.title = title;

  mgr.wire();
  mgr.showScene(Intro);
  ran = random(90, 360), 30, 90

  fill(random(90, 360), 30, 90);
  textSize(50);
  textFont("Broadway");
  textSize(50);
  textFont("Imprint MT Shadow");
  fill(random(100, 360), 60, 80);
  //    b = loadImage("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")
  //    bcreate = createImg("https://cdn.glitch.com/0685d579-8e9a-4110-96d8-53142f2d0779%2FCad.gif?v=1595995250283")

  function clickButton() {
    location.href = "index.html";
  }
  fill(200, 10, 100);
  button3 = createButton("PLAY GAME");
  button4 = createButton("INSTRUCTIONS");

  button3.position(360, 340);
  button3.style('background-color', color(random(90, 360), 30, 90));
  button3.mousePressed(clickButton3);

  button4.position(347, 310);
  button4.style('background-color', color(ran), fill(50, 10, 95));
  button4.mousePressed(clickButton4);

  //create borders
  border1 = new borders(30, 130, 160);
  b2 = new borders(50, 150, 210);
  b3 = new borders(70, 135, 240);
  b4 = new borders(90, 95, 270);
  b5 = new borders(110, 125, 320);
  b6 = new borders(0, 85, 130);
}
function Intro() {
  let bgX = 0; // To scroll the background
  let choice = "";
  //introSong = loadSound('https://cdn.glitch.com/075b311a-0371-463a-a6ba-c4f6c09e32cb%2F1%20-%20Title%20Bgm.mp3?v=1596018063130')
  //introSong.play();

  this.draw = function() {
    background(backback);
    this.showBackground();
    this.moveBackground();
  };

  this.showBackground = function() {
    //image(this.sceneManager.fImage, bgX + 250, 130);
    image(this.sceneManager.fImage, bgX, 130);
    image(this.sceneManager.fImage, bgX + 400, 130);
    //image(this.sceneManager.gImage, bgX, 540);
    image(this.sceneManager.title, 200, 40, 350, 200);
    if (Math.floor(frameCount / 30) % 2 == 0) {
      // A blinking Info
      textAlign(CENTER);
      textFont("VT323");
      textSize(20);
      // text("Select mode to start game", width/2, height - 20);
    }
  };
  this.moveBackground = function() {
    // Reset bgX when it runs out
    bgX -= 2;
    bgX %= 256;
  };
}

function draw() {
  border1.draw();
  b2.draw();
  b3.draw();
  b4.draw();
  b5.draw();
  b6.draw();
  b.postion(400, 400);
  b.size(200, 200);
}


function clickButton3() {
  location.href = "game.html";
}

function clickButton4() {
  location.href = "instructions.html";
}


class borders {
  constructor(y, w, h) {
    this.x = 10;
    this.y = y;
    this.hue = h;
    this.width = w;
    this.height = 21;
  }
  draw() {
    stroke(this.hue, 80, 80);
    strokeWeight(5);
    noFill();
    rect(this.x, this.y, this.width, this.height);
  }
}
