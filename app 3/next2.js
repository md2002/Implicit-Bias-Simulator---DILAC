/* global
 *    rectMode,push,pop,textAlign,textFont,CENTER,removeSprite,updateSprites,camera,Group,keyWentDown,drawSprites,createSprite,Clickable,drawIntroScreen,SceneManager,loadImage,ESCAPE,textSize,image,VIDEO,createCapture,ml5,HSB, background, color, collideRectRect, colorMode, createCanvas, fill, frameRate, keyCode, height,
 *    loop, noFill, noLoop, noStroke, random, rect, round, stroke, sqrt, text, width
 *    frameCount,createLoop, createImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,Intro,createButton,loadSound
 */

let bgImg, song,c,xVel,d, nar, button;
let text1 =
  "Implicit bias is something that everyone has. \nIt’s our unconscious opinions and attitudes towards\n a person or a group of people. \nOftentimes, we are unable to express implicit bias because\n we are unable, or unwilling to do so. \nThe way we treat others can be impacted by our implicit biases. \nEven though we cannot get rid of our biases, \nit is important to be aware of our thoughts \nand consider the factors that have influenced us. \nThis game addresses implicit bias when it comes to philanthropy.";
let text2 =
  "While no philanthropy should be discounted, \nthere are often local community leaders who are doing the most \nvital philanthropic work while receiving the \nleast amount of credit.";
let text3 =
  "After the first round, \nrecognize what type of person you matched with each word. \nPlay the game a second time, \nbut try to match the positive cards to the local superheroes. \nCheck the time differences between the rounds.\n How might these time differences indicate \nthe presence of implicit biases? \nTake a moment to recognize these biases. \nHow can you change them?";
// function preload(){
//     nar = loadImage("https://i.gifer.com/ZJFD.gif");
// }

function setup() {
  createCanvas(750, 570);
  colorMode(HSB, 360, 100, 100);
  xVel=5
  c=200;
  d=200;
  color=random(0,360)
  

  

  button = createButton("Round Two, Let's Go !");
     button.style("font-size", "20px");
      button.style("font-family", "Times");
      button.style("background-color", "#253a57");
      button.style("color", "white");
  button.mousePressed(clickButton);
  button.position(300, 440);

  frameRate(80);
  bgImg = loadImage(
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2Fpapers.co-sf05-night-city-view-lights-gradation-blur-36-3840x2400-4k-wallpaper.jpg?v=1622116694260"
  );
  //moveRect();
  function clickButton() {
    location.href = "index.html";
  }
}

function moveRect(){
 image(nar,c,d, 50, 100);
 c++;
}

function draw() {
  background(bgImg);
  fill(200, 10, 95);
  textSize(18);
  textAlign(CENTER);
  text(text3, 360, 180);
}
