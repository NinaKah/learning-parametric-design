function preload(){// preload assets
}

var Regler = []; 

function setup() {
  createCanvas(800, 500);

  // Slider Array
  for (var i = 0; i < 3; i++) {
    var slider = createSlider(0, 5, 1); // Slider mit 5 Schritten, createSlider(Min:Zahl, Max:Zahl, Aktueller Wert*:Zahl, Schrittgröße*:Zahl);
    slider.size(170); 
    slider.position(520, 115 + i*80); //y Wert je nach Slider anders
    Regler.push(slider);    
  }
}

function draw() {
  colorMode(RGB);
  background(240); // noch sehr unsauber, da HG nur übermalt wird. Kann das ins Setup?
  noStroke ();
  circle (250, 250, 400); 

  //Text
  textSize(15);
  text("Rate your day from 1 [:(] to 5 [:)]", 520, 60);
  textSize(12);
  text("Mood?", 520, 100);
  text("Happiness?", 520, 180);
  //text("Creativity?", 520, 260);

  var context = canvas.getContext('2d'); 
  
  let val1 = Regler[0].value();
  drawSpirograph(context, 250, height/2, // Sitzt nicht ganz mittig?
  val1*25, // Radius Kreis Umlaufbahn
  val1*15,  // Radius Kreis Inlay = Umrandungskreis 
  val1*10); //Anzahl der Umdrehungen

  context.stroke();
  strokeWeight(1.5); 
  let val2 = Regler[1].value();
  stroke (val2*50, 100, 100); //Farbe soll über Regler bestimmt werden, lerp funktion

function drawSpirograph (context, cx, cy, radius1, radius2, ratio) { 
  var x, y, theta;
  context.beginPath();
  context.moveTo(cx + radius1 + radius2, cy);  // starting point (theta = 0)

  for (theta = 0; theta <= Math.PI * 2; theta += 0.001) { // 0.001 bspw zu 0.1 = eckiger -> könnte Slider sein
    x = cx + radius1 * Math.cos(theta) + radius2 * Math.cos(theta * ratio);
    y = cy + radius1 * Math.sin(theta) + radius2 * Math.sin(theta * ratio);
    context.lineTo(x, y);
  }




}
}





 // erster Slider Stroke Farbe mit lerp 
  //let c1 = (90, 220, 210); 
  //let c2 = (190, 220, 210);

  //colorMode(RGB);
  //stroke();
  //let from = color(218, 165, 32);
  //let to = color(72, 61, 139);
  //colorMode(RGB); // Try changing to HSB.
  //let val = slider.value(lerpColor(from, to, 0.5));




  // Ausgabe Ergebnis als png/ tiff 
  // Random Erzeugung von 365 Ergebnissen für Post Plot