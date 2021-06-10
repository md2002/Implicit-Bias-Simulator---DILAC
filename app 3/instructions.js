/* global
 *    rectMode,push,pop,textAlign,textFont,CENTER,removeSprite,updateSprites,camera,Group,keyWentDown,drawSprites,createSprite,Clickable,drawIntroScreen,SceneManager,loadImage,ESCAPE,textSize,image,VIDEO,createCapture,ml5,HSB, background, color, collideRectRect, colorMode, createCanvas, fill, frameRate, keyCode, height,
 *    loop, noFill, noLoop, noStroke, random, rect, round, stroke, sqrt, text, width
 *    frameCount,createLoop, LEFT, createImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,Intro,createButton,loadSound
 */

let bgImg, song, button;

function setup() {
  createCanvas(750, 570);
  colorMode(HSB, 360, 100, 100);

  button = createButton("<- Back To Menu");
  
      button.style("font-size", "20px");
      button.style("font-family", "Times");
      button.style("background-color", "#253a57");
      button.style("color", "white");
  button.mousePressed(clickButton);
  button.position(330, 450);

  frameRate(80);
  bgImg = loadImage(
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2Fpapers.co-sf05-night-city-view-lights-gradation-blur-36-3840x2400-4k-wallpaper.jpg?v=1622116694260"
  );
  function clickButton() {
    location.href = "index.html";
  }
}

function draw() {
  background(bgImg);
  fill(200, 10, 95);
  textSize(35);
  textAlign(CENTER, CENTER);
  text("Instructions", 360, 100)
  textSize(18);
  text(
    "This is a heuristic device to stimulate your thinking. \nTake a couple of deep breaths and free your mind. \n There are ten rounds, each with two images of \n  people and two descriptive words or phrases. \n As quickly as possible, select the word or short \nphrase that most closely matches the person on \nthe left.  The other word or phrase will automatically be \nassigned to the person on the right. Then click on “next”\n for the following pairs of images and words/phrases.",365,
    280
  );
}
