/* global
 *    rectMode,push,pop,textAlign,textFont,CENTER,removeSprite,updateSprites,camera,Group,keyWentDown,drawSprites,createSprite,Clickable,drawIntroScreen,SceneManager,loadImage,ESCAPE,textSize,image,VIDEO,createCapture,ml5,HSB, background, color, collideRectRect, colorMode, createCanvas, fill, frameRate, keyCode, height,
 *    loop, noFill, noLoop, noStroke, random, rect, round, stroke, sqrt, text, width
 *    frameCount,checkScore, createLoop, createImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,Intro,createButton,loadSound
 */

let bgImg, song, textToDis2, textToDis, a, button;
let text5 = "Your score was the number of times that you selected \nthe Global North individual as the superhero/leader and the\nGlobal South individual as the sidekick/heavy lifter/subordinate. \n We believe that the true superheroes are local leaders\n in marginalized neighborhoods.\nKids need role models who look like they do.";

function setup() {
  createCanvas(750, 570);
  colorMode(HSB, 360, 100, 100);

  button = createButton("FINISH");
  button.mousePressed(clickButton);
  button.position(350, 450);
  button.style("font-size", "20px");
  button.style("font-family", "Times");
button.style("background-color", "#253a57");
  button.style("color", "white");

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
  textToDis2 =
    "Your scorer was structured as 'Local Hero, White Professional'.";
  a =
    "1.   If your scored 'Local Hero = White Professional',     \n you paired the local heros from the global south \n     and the renowned white professionals with \n equal number of positive attributes.\n 2.   If your score was 'Local Hero > White Professional',\n you paired the local heroes from the global south \n with more positive attributes as compared\n to the renowned white professionals. \n3.   If your score was 'Local Hero < White Professional',\n you paired the local heros from the global south\n with more negative attributes as compared \n to the renowned white professionals.";

  textAlign(CENTER, CENTER);
  fill(200, 10, 95);

  textSize(18);
  text(text5, 370, 250);
  // textSize(18);
  // text(a, 370, 300);

}
