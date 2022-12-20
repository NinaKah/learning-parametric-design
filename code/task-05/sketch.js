const sketchWidth = 500;
const sketchHeight = 500;

const rectSize = 15;
const padding = 4;
const spacing = rectSize + 2 * padding;

const columns = Math.floor(sketchWidth / spacing);
const rows = Math.floor(sketchHeight / spacing);

//let button; //Wie ändere ich Form und Größe? Brauche ich das let überhaupt?
let color; 

function setup () {
  createCanvas(sketchWidth, sketchHeight);   

  //function resetSketch
  button = createButton('Refresh');
  button.position(440, 520);
  //button.mousePressed (location.reload ());

  //if (button.mousePressed === true) { 
  //  location.reload ()};   
}

function draw () {
  //fill (255, 0); // Rechtecke
  ////stroke (25);
  //strokeWeight (1);

  //for(let x = 0; x <= columns; x += 1) {
  //  for(let y = 0; y <= rows; y += 1) {
  //    rect(x * spacing, y * spacing, rectSize);
  //  }
  //}

  fill (100, 210, 210); 
  stroke (10, 20, 210);
  if (mouseIsPressed === true) {
    fill (33);}
  

  // Funktion mit jedem Mausklicken Farbe random ändern

  //let color = 0;
  //function mouseClicked() {
  //  color += 1;
  //}

  circle(mouseX, mouseY, 20); 

}