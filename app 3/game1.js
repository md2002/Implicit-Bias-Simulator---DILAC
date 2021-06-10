/* global createCanvas, colorMode, HSB, width, height, random, background, fill, 
          color, random, rect, ellipse, stroke, image, loadImage, keyCode,
          collideCircleCircle, text, textSize, mouseX, mouseY, strokeWeight, line, 
          mouseIsPressed, windowWidth, windowHeight, noStroke, UP_ARROW sqrt, DOWN_ARROW , DEGREES, RIGHT_ARROW,
          LEFT_ARROW, collideRectRect, noFill, Clickable, createButton, clear, rotate,
          angleMode, popup, textAlign, CENTER, frameRate, frameCount, SceneManager, createInput, push,pop,translate, textFont,loadFont,createImg*/

let bgImg,
  hImage,
  song,
  button,
  buttonMenu,
  c,
  doneButton,
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
  button10,
  button11,
  button12,
  button13,
  button14,
  button15,
  button16,
  button17,
  button18,
  button19,
  button20,
  bt1,
  bt9,
  bt10,
  btTextPos,
  btTextNeg,
  bt11,
  bt13,
  bt12,
  bt14,
  bt15,
  bt16,
  bt17,
  bt18,
  bt19,
  bt20,
  loadImg1,
  loadImg2,
  bt2,
  bt3,
  bt4,
  bt5,
  bt6,
  hImg1,
  hImg2,
  doneButton1,
  bt7,
  textToDis,
  textToDis2,
  bt8;

let i1 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F1.%C2%BA_Semina%CC%81rio_Tema%CC%81tico_do_Processo_de_Construc%CC%A7a%CC%83o_da_PNA_(17).png?v=1622728454612",
  i2 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F25626764_1651375501567879_1643204329461449026_o.png?v=1622728455625",
  i3 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F18815176_1808662019449147_6957912351391409133_o.png?v=1622728461723",
  i4 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F36291202_2125291064166005_7600924015959474176_n.png?v=1622728461931",
  i5 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F3792231784_da97d28394_o.png?v=1622728463710",
  i6 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FAfoxe%CC%81%20Filhos%20de%20Gandhi_IPN%20-%20Instituto%20Pretos%20Novos_Gamboa%20(72).png?v=1622728469360",
  i7 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FIMG_2507.png?v=1622728469664",
  i8 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FIMG_9234.png?v=1622728471682",
  i9 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FCo%CC%81pia%20de%20nordeste_stills_1.14.1.png?v=1622728472182",
  i10 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FJONGO%20da%20Serrinha%2013%2008%202016_27.png?v=1622728474773",
  i11 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F5c16f19220832.image.png?v=1622728721859",
  i12 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FScreen%20Shot%202021-06-03%20at%207.54.37%20PM.png?v=1622730315226",
  i13 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2Fjim-borders-2.png?v=1622728723857",
  i14 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FPHOTOS101.png?v=1622728726918",
  i15 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FScreen%20Shot%202021-06-03%20at%207.58.58%20PM.png?v=1622730572233",
  i16 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FWarren-Buffett-HD-Wallpaper-770x515.png?v=1622728730482",
  i17 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2Fyork_-_elb.png?v=1622728732226",
  i18 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2Foption_2-1.png?v=1622728737057",
  i19 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2FTELEMMGLPICT000215147116_trans_NvBQzQNjv4BqsXJ4x1hHApqw7ff8y1ZSzRjHQHP1QiyRBs68jGZGuWw.jpeg.png?v=1622728743008",
  i20 =
    "https://cdn.glitch.com/cd868c64-cac5-413f-8a52-5d28762eb7ec%2F65AA3B38-CA52-4DBD-91DC-E5AF602EDC48.jpg.png?v=1622728747138",
  hImage1 = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10],
  hImage2 = [i11, i12, i13, i14, i15, i16, i17, i18, i19, i20],
  posWords = [
    "Superhero",
    "Innovator",
    "Leader",
    "Senior Partner",
    "Trustworthy",
    "Policymaker",
    "Charitable",
    "Take Charge",
    "Praiseworthy",
    "Efficient"
  ],
  negWords = [
    "Sidekick",
    "Heavy Lifter",
    "Follower",
    "Junior Partner",
    "Potentially Corrupt",
    "Stakeholder",
    "Grateful",
    "Subordinate",
    "Admirer",
    "Inefficient"
  ];
var scoreP = 0;
var scoreN = 0;

var timerValue = 50;
var startButton;
function setup() {
  createCanvas(750, 570);
  colorMode(HSB, 360, 100, 100);
  var i = 1;

  hImg1 = createImg(hImage1[i]);
  hImg2 = createImg(hImage2[i]);
  btTextPos = posWords[i];
  btTextNeg = negWords[i];

  var col = (random(90, 360), 30, 90);

  buttonMenu = createButton("Back To Main Menu");
  buttonMenu.style("font-size", "18px");

  buttonMenu.mousePressed(clickbuttonMenu);
  buttonMenu.position(40, 40);

  doneButton = createButton("Next Hero ->");
  doneButton.style("font-size", "18px");
  doneButton.mousePressed(clickbuttonDone);
  doneButton.position(650, 550);

  buttonMenu.style("font-family", "Times");
  buttonMenu.style("background-color", "#4d0b0b");
  buttonMenu.style("color", "white");

  doneButton.style("font-family", "Times");
  doneButton.style("background-color", "#253a57");
  doneButton.style("color", "white");

  button1 = createButton(posWords[i]);
  button1.style("font-size", "17px");
  button1.mousePressed(bt21);
  button1.position(350, 470);

  button2 = createButton(negWords[i]);
  button2.style("font-size", "17px");
  button2.mousePressed(bt22);
  button2.position(350, 500);

  button1.style("font-family", "Times");
  button1.style("background-color", color(random(90, 360), 60, 94));
  button1.style("color", "white");

  button2.style("font-family", "Times");
  button2.style("background-color", color(random(30, 260), 60, 94));
  button2.style("color", "white");

  frameRate(80);
  bgImg = loadImage(
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FGradient-Background-Wallpaper-003.jpeg?v=1622117023011"
  );

  //loadHero();
  function clickbuttonDone() {
    if (i < 9) {
      i++;
      loadImg1 = hImg1[i];
      loadImg2 = hImg1[i];
    } else {
      text("game over", 250, 520);
    }
    hImg1 = createImg(loadImg1);
    hImg2 = createImg(loadImg2);
    button1.position(1000, 10000);
    button2.position(10000, 10000);
    button1 = createButton(posWords[i]);
    button2 = createButton(negWords[i]);
   

    if (i == 9) {
      doneButton1 = createButton("Done!");
      doneButton1.style("font-size", "20px");
      doneButton1.mousePressed(clickbuttonDone1);
      doneButton.position(10000, 5150);
      doneButton1.position(670, 550);
      doneButton1.style("font-family", "Times");
      doneButton1.style("background-color", "#253a57");
      doneButton1.style("color", "white");
    }


    button1.style("font-size", "17px");
    button1.position(350, 470);
    button1.mousePressed(bt21);

    button2.mousePressed(bt22);
    button2.style("font-size", "17px");
    button2.position(350, 500);

    button1.style("font-family", "Times");
    button1.style("background-color", color(random(90, 360), 60, 94));
    button1.style("color", "white");

    button2.style("font-family", "Times");
    button2.style("background-color", color(random(30, 260), 60, 94));
    button2.style("color", "white");
  }
  function clickbuttonMenu() {
    location.href = "index.html";
  }
  function clickbuttonDone1() {
    location.href = "done.html";
  }

  function bt1() {
    button1.style("font-size", "20px");
    button1.position(150, 430);

    button1.style("font-family", "Times");
    button1.style("background-color", color(random(90, 260), 80, 94));
    button1.style("color", "white");
  }

  function bt21() {
    button1.style("font-size", "20px");
    button1.position(150, 430);

    button1.style("font-family", "Times");
    button1.style("background-color", color(random(90, 260), 80, 94));
    button1.style("color", "white");

    button2.style("font-size", "20px");
    button2.position(500, 430);
    button2.style("font-family", "Times");
    button2.style("background-color", color(random(90, 260), 80, 94));
    button2.style("color", "white");
    scoreP++;
  }

  function bt22() {
    button2.style("font-size", "20px");
    button2.position(150, 430);

    button2.style("font-family", "Times");
    button2.style("background-color", color(random(90, 260), 80, 94));
    button2.style("color", "white");

    button1.style("font-size", "20px");
    button1.position(500, 430);

    button1.style("font-family", "Times");
    button1.style("background-color", color(random(90, 260), 80, 94));
    button1.style("color", "white");
    scoreN++;
  }

  function bt2() {
    button2.style("font-size", "20px");
    button2.position(500, 430);
    button2.style("font-family", "Times");
    button2.style("background-color", color(random(90, 260), 80, 94));
    button2.style("color", "white");
  }

  textAlign(CENTER);
  setInterval(timeIt, 1000);
}
var x = 350;
var y = 35;
function draw() {
  background(bgImg);
  hImg1.position(100, 170);
  hImg2.position(450, 170);
  hImg1.size(260, 230);
  hImg2.size(240, 230);
  fill(200, 10, 95);
  textSize(25);
  textAlign(CENTER);
  text("Associate the Words", 350, 100);
  textAlign(CENTER, CENTER);
  textSize(25);

  textSize(20);
  text("Scorer: " + scoreP + ", " + scoreN, 670, 35);
  textAlign(CENTER, CENTER);

  textSize(20);

  if (timerValue >= 10) {
    text("0:" + timerValue, x, y);
  }
  if (timerValue < 10) {
    text("0:0" + timerValue, x, y);
  }
  if (timerValue == 0) {
    text("game over", x, y + 550);
  }
}
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function checkScore() {
  textToDis2 = "Your scorer was '" + scoreP + ", " + scoreN + "'.";
  if (scoreP == scoreN) {
    textToDis =
      "You paired the local heros from the global south and \nthe renowned white professionals with \nequal number of positive attributes.";
  } else if (scoreP > scoreN) {
    textToDis =
      "You paired the local heroes from the global south with \nmore positive attributes as compared \nto the renowned white professionals.";
  } else {
    textToDis =
      "You paired the local heros from the global south with\n more negative attributes as compared \n to the renowned white professionals.";
  }
  textAlign(CENTER, CENTER);
  fill(200, 10, 95);
  textSize(20);
  text(textToDis2, 300, 180);
  text(textToDis, 300, 210);
}
