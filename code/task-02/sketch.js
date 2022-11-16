const sketchWidth = 400;
const sketchHeight = 400;
const size = 50;

function setup() {
  createCanvas(sketchWidth, sketchHeight);

  background(250);
  
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 1) {
      const shapeNum = random(4);
      if (shapeNum < 1) {

        fill(25, 40, 10, 30)
        stroke(100, 250, 215)
        strokeWeight(4)
        circle(x * size + size / 2, y * size + size / 2, size);
      } else {

        stroke(25)
        strokeWeight(3)
        line(x * size, y * size, 400, 0); 


      }
    }
  }
}

function draw(){
}