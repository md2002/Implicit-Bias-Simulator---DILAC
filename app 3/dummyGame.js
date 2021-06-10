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
  bt11,
  bt13,
  bt12,
  bt14,
  bt15,
  bt16,
  bt17,
  bt18,
  bt19,
  bt20,loadImg1, loadImg2,
  bt2,
  bt3,
  bt4,
  bt5,
  bt6, hImg1, hImg2,
  doneButton1,
  bt7,
  bt8;

let i1 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F15326430_1106871242758695_710733469734252679_n.png?v=1619898896385",
  i2 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F115875303_1725681377599006_910168716093796800_n.png?v=1620844464143",
  i3 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F116441498_1725681380932339_2169811501794827449_n.png?v=1620844464844",
  i4 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2Fluciana-bezerra.png?v=1620844465702",
  i5 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F3792231784_da97d28394_o.png?v=1620844466052",
  i6 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F126433597_3671309902907752_8852022330840074538_n.png?v=1620844470566",
  i7 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FSebastian%20Rio%20Olympics.png?v=1620844473924",
  i8 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F10958839_10203850467444929_1618547140416766567_n.png?v=1620844515310",
  i9 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F15078555_1226823877356379_992974124634674497_n.png?v=1620844519662",
  i10 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F19260569_322597908181525_7211251131218518658_n.png?v=1620844519870",
  i11 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F18815176_1808662019449147_6957912351391409133_o.png?v=1620844519957",
  i12 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F16712013_1321837154521717_892796736823291239_n.png?v=1620844521209",
  i13 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F25626764_1651375501567879_1643204329461449026_o.png?v=1620844521763",
  i14 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F8990-tia-maria-do-jongo-da-serrinha-conta-sobre-a-origem-do-grupo.png?v=1620844539258",
  i15 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2F1.%E2%94%AC%E2%95%91_Semina%E2%95%A0u%CC%88rio_Tema%E2%95%A0u%CC%88tico_do_Processo_de_Construc%E2%95%A0%C2%BAa%E2%95%A0a%CC%82o_da_PNA_(17).png?v=1620844545058",
  i16 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.51.38%20PM.png?v=1621682511699",
  i17 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.51.59%20PM.png?v=1621682532647",
  i18 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.52.14%20PM.png?v=1621682547681",
  i19 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.52.49%20PM.png?v=1621682582861",
  i20 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.52.14%20PM.png?v=1621682547681",
  i21 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.53.29%20PM.png?v=1621682623253",
  i22 =
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2FScreen%20Shot%202021-05-22%20at%204.53.09%20PM.png?v=1621682601964",
  hImage1 = [
    i1, i1, i1, i1, i1, i1, i1, i1, i1, i1
  ],
hImage2 = [i16, i16, i16, i16, i16, i16, i16, i16, i16, i16];


var timerValue = 150;
var startButton;
let i = 0;
function setup() {
  createCanvas(750, 570);
  colorMode(HSB, 360, 100, 100);
  
  

  hImg1 = createImg(hImage1[i]);
  hImg2 = createImg(hImage2[i]);

  var col = (random(90, 360), 30, 90);

  buttonMenu = createButton("Back To Menu");
  buttonMenu.mousePressed(clickbuttonMenu);
  buttonMenu.position(40, 40);

  doneButton = createButton("Next Hero");
  doneButton.mousePressed(clickbuttonDone);
  doneButton.position(40, 70);

  button1 = createButton("Superhero");
  button1.style("background-color", color(random(90, 360), 30, 90));
  button1.mousePressed(bt1);
  button1.position(70, 430);

  button2 = createButton("Sidekick");
  button2.style("background-color", color(random(90, 360), 30, 90));
  button2.mousePressed(bt2);
  button2.position(180, 430);

  button3 = createButton("Leader");
  button3.style("background-color", color(random(90, 360), 30, 90));
  button3.mousePressed(bt3);
  button3.position(70, 460);

  button4 = createButton("Follower");
  button4.style("background-color", color(random(90, 360), 30, 90));
  button4.mousePressed(bt4);
  button4.position(180, 460);

  button5 = createButton("Innovator");
  button5.style("background-color", color(random(90, 360), 30, 90));
  button5.mousePressed(bt5);
  button5.position(70, 490);

  button6 = createButton("Contributor");
  button6.style("background-color", color(random(90, 360), 30, 90));
  button6.mousePressed(bt6);
  button6.position(180, 490);

  button7 = createButton("Central");
  button7.style("background-color", color(random(90, 360), 30, 90));
  button7.mousePressed(bt7);
  button7.position(70, 520);

  button8 = createButton("Assistant");
  button8.style("background-color", color(random(90, 360), 30, 90));
  button8.mousePressed(bt8);
  button8.position(180, 520);

  button9 = createButton("Role Model");
  button9.style("background-color", color(random(90, 360), 30, 90));
  button9.mousePressed(bt9);
  button9.position(70, 550);

  button10 = createButton("Helper");
  button10.style("background-color", color(random(90, 360), 30, 90));
  button10.mousePressed(bt10);
  button10.position(180, 550);

  button11 = createButton("Creator");
  button11.style("background-color", color(random(90, 360), 30, 90));
  button11.mousePressed(bt11);
  button11.position(320, 430);

  button12 = createButton("Backup");
  button12.style("background-color", color(random(90, 360), 30, 90));
  button12.mousePressed(bt12);
  button12.position(420, 430);

  button13 = createButton("Professional");
  button13.style("background-color", color(random(90, 360), 30, 90));
  button13.mousePressed(bt13);
  button13.position(320, 460);

  button14 = createButton("Amateur");
  button14.style("background-color", color(random(90, 360), 30, 90));
  button14.mousePressed(bt14);
  button14.position(420, 460);

  button15 = createButton("Critical");
  button15.style("background-color", color(random(90, 360), 30, 90));
  button15.mousePressed(bt15);
  button15.position(320, 490);

  button16 = createButton("Employee");
  button16.style("background-color", color(random(90, 360), 30, 90));
  button16.mousePressed(bt16);
  button16.position(420, 490);

  button17 = createButton("Pioneer");
  button17.style("background-color", color(random(90, 360), 30, 90));
  button17.mousePressed(bt17);
  button17.position(320, 520);

  button18 = createButton("Nonessential");
  button18.style("background-color", color(random(90, 360), 30, 90));
  button18.mousePressed(bt18);
  button18.position(420, 520);

  button19 = createButton("Activist");
  button19.style("background-color", color(random(90, 360), 30, 90));
  button19.mousePressed(bt19);
  button19.position(320, 550);

  button20 = createButton("Peripheral");
  button20.style("background-color", color(random(90, 360), 30, 90));
  button20.mousePressed(bt20);
  button20.position(420, 550);

  frameRate(80);
  bgImg = loadImage(
    "https://cdn.glitch.com/7fccfd6b-1ddc-4c3d-8c29-cdb68062fe54%2Fd274503.jpeg?v=1619783128883"
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
    button1.mousePressed(bt1);
    button1.position(450, 40);

    if (i == 21) {
      doneButton1 = createButton("Done!");
      doneButton1.style("font-size", "30px");
      doneButton1.style("background-color", (34, 34, 34));
      doneButton1.mousePressed(clickbuttonDone1);
      doneButton1.position(40, 70);
    }

    //     button1.mousePressed(bt1);
    //     button1.position(450, 40);

    //     button2.mousePressed(bt2);
    //     button2.position(450, 65);

    //     button3.mousePressed(bt3);
    //     button3.position(450, 90);

    //     button4.mousePressed(bt4);
    //     button4.position(450, 115);

    //     button5.mousePressed(bt5);
    //     button5.position(450, 140);

    //     button6.mousePressed(bt6);
    //     button6.position(450, 165);

    //     button7.mousePressed(bt7);
    //     button7.position(450, 190);

    //     button8.mousePressed(bt8);
    //     button8.position(450, 215);

    //     button9.mousePressed(bt8);
    //     button9.position(450, 240);

    //     button10.mousePressed(bt8);
    //     button10.position(450, 265);

    //     button11.mousePressed(bt8);
    //     button11.position(450, 290);

    //     button12.mousePressed(bt8);
    //     button12.position(450, 315);

    //     button13.mousePressed(bt8);
    //     button13.position(450, 340);

    //     button14.mousePressed(bt8);
    //     button14.position(450, 365);

    //     button15.mousePressed(bt8);
    //     button15.position(450, 390);

    //     button16.mousePressed(bt8);
    //     button16.position(450, 415);

    //     button17.mousePressed(bt8);
    //     button17.position(450, 440);

    //     button18.mousePressed(bt8);
    //     button18.position(450, 465);

    //     button19.mousePressed(bt8);
    //     button19.position(450, 490);

    //     button20.mousePressed(bt8);
    //     button20.position(450, 515);

    button1.style("background-color", color(random(90, 360), 30, 90));
    button1.mousePressed(bt1);
    button1.style("font-size", "14px");
    button1.position(70, 430);

    button2.style("background-color", color(random(90, 360), 30, 90));
    button2.mousePressed(bt2);
    button2.style("font-size", "14px");
    button2.position(180, 430);

    button3.style("background-color", color(random(90, 360), 30, 90));
    button3.mousePressed(bt3);
    button3.style("font-size", "14px");
    button3.position(70, 460);

    button4.style("background-color", color(random(90, 360), 30, 90));
    button4.mousePressed(bt4);
    button4.style("font-size", "14px");
    button4.position(180, 460);

    button5.style("background-color", color(random(90, 360), 30, 90));
    button5.mousePressed(bt5);
    button5.style("font-size", "14px");
    button5.position(70, 490);

    button6.style("background-color", color(random(90, 360), 30, 90));
    button6.mousePressed(bt6);
    button6.style("font-size", "14px");
    button6.position(180, 490);

    button7.style("background-color", color(random(90, 360), 30, 90));
    button7.mousePressed(bt7);
    button7.style("font-size", "14px");
    button7.position(70, 520);

    button8.style("background-color", color(random(90, 360), 30, 90));
    button8.mousePressed(bt8);
    button8.style("font-size", "14px");
    button8.position(180, 520);

    button9.style("background-color", color(random(90, 360), 30, 90));
    button9.mousePressed(bt9);
    button9.style("font-size", "14px");
    button9.position(70, 550);

    button10.style("background-color", color(random(90, 360), 30, 90));
    button10.mousePressed(bt10);
    button10.style("font-size", "14px");
    button10.position(180, 550);

    button11.style("background-color", color(random(90, 360), 30, 90));
    button11.mousePressed(bt11);
    button11.style("font-size", "14px");
    button11.position(320, 430);

    button12.style("background-color", color(random(90, 360), 30, 90));
    button12.mousePressed(bt12);
    button12.style("font-size", "14px");
    button12.position(420, 430);

    button13.style("background-color", color(random(90, 360), 30, 90));
    button13.mousePressed(bt13);
    button13.style("font-size", "14px");
    button13.position(320, 460);

    button14.style("background-color", color(random(90, 360), 30, 90));
    button14.mousePressed(bt14);
    button14.style("font-size", "14px");
    button14.position(420, 460);

    button15.style("background-color", color(random(90, 360), 30, 90));
    button15.mousePressed(bt15);
    button15.style("font-size", "14px");
    button15.position(320, 490);

    button16.style("background-color", color(random(90, 360), 30, 90));
    button16.mousePressed(bt16);
    button16.style("font-size", "14px");
    button16.position(420, 490);

    button17.style("background-color", color(random(90, 360), 30, 90));
    button17.mousePressed(bt17);
    button17.style("font-size", "14px");
    button17.position(320, 520);

    button18.style("background-color", color(random(90, 360), 30, 90));
    button18.mousePressed(bt18);
    button18.style("font-size", "14px");
    button18.position(420, 520);

    button19.style("background-color", color(random(90, 360), 30, 90));
    button19.mousePressed(bt19);
    button19.style("font-size", "14px");
    button19.position(320, 550);

    button20.style("background-color", color(random(90, 360), 30, 90));
    button20.mousePressed(bt20);
    button20.style("font-size", "14px");
    button20.position(420, 550);
  }
  function clickbuttonMenu() {
    location.href = "index.html";
  }
  function clickbuttonDone1() {
    location.href = "done.html";
  }

  function bt1() {
    button1.style("font-size", "17px");

    button1.style("background-color", color(0, 0, 100));
  }

  function bt2() {
    button2.style("font-size", "17px");

    button2.style("background-color", color(0, 0, 100));
  }

  function bt3() {
    button3.style("font-size", "17px");

    button3.style("background-color", color(0, 0, 100));
  }

  function bt4() {
    button4.style("font-size", "17px");

    button4.style("background-color", color(0, 0, 100));
  }
  function bt5() {
    button5.style("font-size", "17px");

    button5.style("background-color", color(0, 0, 100));
  }

  function bt6() {
    button6.style("font-size", "17px");

    button6.style("background-color", color(0, 0, 100));
  }
  function bt7() {
    button7.style("font-size", "17px");

    button7.style("background-color", color(0, 0, 100));
  }

  function bt8() {
    button8.style("font-size", "17px");

    button8.style("background-color", color(0, 0, 100));
  }

  function bt9() {
    button9.style("font-size", "17px");

    button9.style("background-color", color(0, 0, 100));
  }

  function bt10() {
    button10.style("font-size", "17px");

    button10.style("background-color", color(0, 0, 100));
  }

  function bt11() {
    button11.style("font-size", "17px");

    button11.style("background-color", color(0, 0, 100));
  }

  function bt12() {
    button12.style("font-size", "17px");

    button12.style("background-color", color(0, 0, 100));
  }

  function bt13() {
    button13.style("font-size", "17px");

    button13.style("background-color", color(0, 0, 100));
  }

  function bt14() {
    button14.style("font-size", "17px");

    button14.style("background-color", color(0, 0, 100));
  }

  function bt15() {
    button15.style("font-size", "17px");

    button15.style("background-color", color(0, 0, 100));
  }

  function bt16() {
    button16.style("font-size", "17px");

    button16.style("background-color", color(0, 0, 100));
  }

  function bt17() {
    button17.style("font-size", "17px");

    button17.style("background-color", color(0, 0, 100));
  }

  function bt18() {
    button18.style("font-size", "17px");

    button18.style("background-color", color(0, 0, 100));
  }

  function bt19() {
    button19.style("font-size", "17px");

    button19.style("background-color", color(0, 0, 100));
  }

  function bt20() {
    button20.style("font-size", "17px");
    button20.style("background-color", color(0, 0, 100));
  }

  textAlign(CENTER);
  setInterval(timeIt, 1000);
}
var x = 250;
var y = 35;
function draw() {
  background(bgImg);
  hImg1.position(100, 170);
  hImg2.position(450, 170);
  hImg1.size(250, 230);
  hImg2.size(250, 230);
  fill(200, 10, 95);
  textSize(25);
  textAlign(CENTER);
  text("Associate the Words", 250, 100);
  textAlign(CENTER, CENTER);
  textSize(25);

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
