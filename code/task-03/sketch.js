const sketchHeight = 400;
const sketchWidth = 400;
const margin = 120;
const pointCount = 200;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  angleMode(DEGREES);

background(10, 110, 140);
stroke (90, 220, 210);
strokeWeight(1);
noFill();

beginShape();
for (let p = 0; p < pointCount; p += 1) {
  curveVertex(
    random(210, 370),
    random(200, 360)
  );
}
endShape();
}

function draw(){
  strokeWeight(6);
  beginShape();
  bezier(400, 30, 350, 350, 0, 100, 0, 370);

  strokeWeight(2);
  fill(10, 100, 80, 70);
  beginShape();
    curveVertex(30, 120);
    curveVertex(40, 50);
    curveVertex(150, 30);
    curveVertex(200, 100);
    curveVertex(150, 100);
    curveVertex(110, 120);
    curveVertex(80, 190);
  endShape(CLOSE);  

noLoop();
}