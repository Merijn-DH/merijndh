function setup() {
  //create canvas
  createCanvas (1200,800);
}

function draw() {
  //background
  background (75,40,0);
  //body
  noStroke ();
  fill (50,50,200);
  rect (105,100,15,80,10);
  //legs
  fill (250,0,50);
  rect (118,170,5,50,15);
  rect (102,170,5,50,15);
  //feet
  fill (150);
  rect (118,220,15,10);
  rect (92,220,15,10);
  //arms
  fill (0);
  stroke (0,250,250);
  line (120,130,130,170);
  line (104,130,69,120);
  //hands
  noStroke ();
  fill (250,150,0);
  ellipse (130,170,10,10);
  ellipse (69,120,10,10);
  //head
  fill (200,250,50);
  ellipse (mouseX,mouseY,50,50);
  //eyes
  fill (250);
  ellipse (mouseX-10,mouseY,15,15);
  ellipse (mouseX+10,mouseY,15,15);
  fill (0,0,250);
  ellipse (mouseX-10,mouseY,5,5);
  ellipse (mouseX+10,mouseY,5,5);
  //text
  fill (250);
  noStroke ();
  text ("put his head back on",1080,790);
  //lock in head
  if (mouseY>97){
    if (mouseY<103) {
      if (mouseX>109) {
        if (mouseX<115) {
         fill (75,40,0);
         noStroke ();
         rect (1080,770,135,25)
         fill (250);
         text ("Thank you for putting my head back on!",10,50);
         noLoop();
        }
      }
    }
  }
}﻿
