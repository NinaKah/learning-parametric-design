function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400, 40);
}

function draw() {
  background(0)

  fill(20, 170, 210)
  strokeWeight(0)
    square(10, 10, 180, 0, 0, 40, 0);

    square(210, 210, 180, 40, 0, 0, 0);

  fill(35, 50, 100)
  stroke(10, 20, 25)
  strokeWeight(4)
    square(100, 100, 70, 10, 10, 0, 10);
    square(230, 230, 70, 0, 10, 10, 10);

  fill(205, 25, 50)
  stroke(100, 20, 90)
  strokeWeight(7)
    circle(300, 100, 150);
    circle(100, 300, 150);

  fill(235, 25, 150, 100)
  stroke(100, 250, 215)
  strokeWeight(4)
    circle(100, 100, 60);
    circle(300, 300, 60);

  stroke(255)
  strokeWeight(2)
    line(210, 190, 370, 190) 
    line(210, 20, 210, 190) 
    
    line(10, 210, 190, 210) 
    line(190,380, 190, 210) 
  
  
 angleMode(DEGREES);

 arc(400, 400, OPEN)


}

