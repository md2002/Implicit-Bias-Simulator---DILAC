/* global
 *    rectMode,push,pop,textAlign,textFont,CENTER,removeSprite,updateSprites,camera,Group,keyWentDown,drawSprites,createSprite,Clickable,drawIntroScreen,SceneManager,loadImage,ESCAPE,textSize,image,VIDEO,createCapture,ml5,HSB, background, color, collideRectRect, colorMode, createCanvas, fill, frameRate, keyCode, height,
 *    loop, noFill, noLoop, noStroke, random, rect, round, stroke, sqrt, text, width
 *    frameCount,createLoop, createImg, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,Intro,createButton,loadSound
 */

let bgImg, song, button;
let text4 = "We all suffer from implicit cognitive bias. \nOur education, images, symbols, and patterns produce \nsubconscious bias towards many categories of people, \nsuch as the elderly, the obese, and categories based on \n race, ethnicity, and sexual orientation.\nIn Global Philanthropy, there is a bias whereby we associate \nacademics, practitioners and philanthropists from the Global North \nwith leadership and innovators and people of color in \nthe Global South with roles as heavy lifters and stakeholders. \n All of the people depicted in this simulation are great leaders,\n innovators, and superheroes in their own ways.";
let text1 =
  "Implicit bias is something that everyone has. \nIt’s our unconscious opinions and attitudes towards\n a person or a group of people. \nOftentimes, we are unable to express implicit bias because\n we are unable, or unwilling to do so. \nThe way we treat others can be impacted by our implicit biases. \nEven though we cannot get rid of our biases, \nit is important to be aware of our thoughts \nand consider the factors that have influenced us. \nThis game addresses implicit bias when it comes to philanthropy.";
let text2 =
  "While no philanthropy should be discounted, \nthere are often local community leaders who are doing the most \nvital philanthropic work while receiving the \nleast amount of credit.";
let text3 =
  "After the first round, \nrecognize what type of person you matched with each word. \nPlay the game a second time, \nbut try to match the positive cards to the local superheroes. \nCheck the time differences between the rounds.\n How might these time differences indicate \nthe presence of implicit biases? \nTake a moment to recognize these biases. \nHow can you change them?";

function setup() {
  createCanvas(750, 570);
  colorMode(HSB, 360, 100, 100);


  button = createButton("Next >");
  
    button.style("font-size", "20px");
      button.style("font-family", "Times");
      button.style("background-color", "#253a57");
      button.style("color", "white");
  button.mousePressed(clickButton);
  button.position(360, 430);

  frameRate(80);
  bgImg = loadImage(
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2Fpapers.co-sf05-night-city-view-lights-gradation-blur-36-3840x2400-4k-wallpaper.jpg?v=1622116694260"
  );
  function clickButton() {
    location.href = "next.html";
  }
}

function draw() {
  background(bgImg);
  fill(200, 10, 95);
  textSize(18);
  textAlign(CENTER);
  text(text4, 370, 150);
}


