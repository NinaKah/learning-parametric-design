const sketchWidth = 800;
const sketchHeight = 500;

let button; // Button PNG
var Regler = []; 

var currentTime = new Date().toISOString().slice(0, 10);

function setup() {
let c = createCanvas(sketchWidth, sketchHeight);  

// Slider Array
  for (var i = 0; i < 3; i++) {
    var slider = createSlider(0, 5, 1, 0.1); // Slider mit 5 Schritten, createSlider(Min:Zahl, Max:Zahl, Aktueller Wert*:Zahl, Schrittgröße*:Zahl);
    slider.size(170); 
    slider.position(520, 115 + i*80); //y Wert je nach Slider anders
    Regler.push(slider);    
  }
}

function draw() {
  colorMode(RGB);
  background(240); 
  strokeWeight(0); 
  circle (250, 250, 400); 

  var context = canvas.getContext('2d'); 
  let val1 = Regler[0].value();
  let val2 = Regler[1].value(); 
  let val3 = Regler[2].value(); 

  // Spirographen Muster 
  strokeWeight(1);

  stroke ("black");
  drawSpirograph1(context, 250, height/2,
  val2, // radius1
  val3,  // radius2 - Kreis Inlay = Umrandungskreis 
  val1); // ratio - Anzahl der Umdrehungen
  context.stroke();

}

function drawSpirograph1 (context, cx, cy, val1, val2, ratio) {
  let radius1 = val1 * 10;
  let radius2 = val2 * 10;

  var x, y, theta;
  context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);
  
  for (theta = 0; theta <= Regler[0].value()/5 * Math.PI*2; theta += 0.005) { 
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }
}
